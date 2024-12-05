import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateKidDto } from './dto/create-kid.dto';
import { UpdateKidDto } from './dto/update-kid.dto';
import { Kid } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { NotFoundError } from 'rxjs';

@Injectable()
export class KidService {
  constructor(private db:PrismaService=db){}
  

  create(createKidDto: CreateKidDto) {
    return this.db.kid.create({data:createKidDto});
  }

  findAll() {
    return this.db.kid.findMany();
  }

 async findOne(id: number) {
  try
    {

      return await this.db.kid.findUniqueOrThrow({where:{id}});
    }
    catch(e){
      throw new NotFoundException("id not found");
  }
}

  async update(id: number, updateKidDto: UpdateKidDto) {
    try{
      return await this.db.kid.update({where:{id},data:updateKidDto});
    }
    catch(e){
      throw new NotFoundException("id not found");
  }
}

 async remove(id: number) {
    try{
       return await this.db.kid.delete({where:{id}});

    } catch(e){
      throw new NotFoundException("id not found");
  }
}
 async addToyToKid(kidId:number,toyId:number){
  try{
    return await this.db.kid.update({where:{id:kidId},data:{toys:{connect:{id:toyId}}}});
  }
  catch(e){
    throw new NotFoundException("id not found");
  }
}

 async removeToyFromKid(kidId:number,toyId:number){
  try{
    return this.db.kid.update({where:{id:kidId},data:{toys:{disconnect:{id:toyId}}}});
  }
  catch(e){
    throw new NotFoundException("id not found");
  }
 }

}
