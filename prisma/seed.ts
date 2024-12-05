import { PrismaClient } from '@prisma/client'
import { faker, he } from '@faker-js/faker';
 
const prisma = new PrismaClient()

async function main() {
    let help:string[] = ['wood','metal','plastic','other']
    for (let i = 0; i < 20; i++) {
  await prisma.toy.create({
    data: {
      name: faker.commerce.productName(),
      material: help[faker.number.int({min:0,max:3})],
      weight: faker.number.float({min:0.1,max:10}),
    },
  })
await prisma.kid.create({
   
    data: {
      name: faker.person.fullName(),
      address: faker.location.country()+" "+faker.location.city()+" "+faker.location.streetAddress()+" "+faker.location.buildingNumber(),
      goodOrBad: true,
    },
  })

}}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })