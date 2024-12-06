import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateToyDto } from './dto/create-toy.dto';
import { UpdateToyDto } from './dto/update-toy.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ToyService {
  constructor(private db:PrismaService=db){}
  
  create(createToyDto: CreateToyDto) {
    return this.db.toy.create({data:createToyDto});
  }

  findAll() {
    return this.db.toy.findMany();
  }

 async findOne(id: number) {
  try{
    return await this.db.toy.findUniqueOrThrow({where:{id}});
  }
  catch(e){
    throw new NotFoundException("id not found");
  }
 }
 async update(id: number, updateToyDto: UpdateToyDto) {
  try{
    const toy =   await this.db.toy.update({where:{id},data:updateToyDto});
  
    return toy}
  catch(e){
    throw new NotFoundException("id not found");
  }
}

 async remove(id: number) {
  try{
    return await this.db.toy.delete({where:{id}});
  }
  catch(e){
    throw new NotFoundException("id not found");
  }
 }
 async addKidtoToy(toyId:number,kidId:number){
  const kid = await this.db.kid.findUnique({where:{id:kidId}});
  const toy = await this.db.toy.findUnique({where:{id:toyId}});
  if(!kid || !toy){
    throw new NotFoundException("id not found");
  }
  else{
    return await this.db.toy.update({where:{id:toyId},data:{Kids:{connect:{id:kidId}}}});
  }
}

 async removeKidFromToy(toyId:number,kidId:number){
  const kid = await this.db.kid.findUnique({where:{id:kidId}});
  const toy = await this.db.toy.findUnique({where:{id:toyId}});
  if(!kid || !toy){
    throw new NotFoundException("id not found");
    }
  else{
    return await this.db.toy.update({where:{id:toyId},data:{Kids:{disconnect:{id:kidId}}}});
    } 
  }
}

