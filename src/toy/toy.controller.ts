import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ToyService } from './toy.service';
import { CreateToyDto } from './dto/create-toy.dto';
import { UpdateToyDto } from './dto/update-toy.dto';

@Controller('toys')
export class ToyController {
  constructor(private readonly toyService: ToyService) {}

  @Post()
  create(@Body() createToyDto: CreateToyDto) {
    return this.toyService.create(createToyDto);
  }

  @Get()
  findAll() {
    return this.toyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.toyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateToyDto: UpdateToyDto) {
    return this.toyService.update(+id, updateToyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.toyService.remove(+id);
  }
  @Put(':toyId/children/:kidId')
  addKidToToy(@Param('toyId') toyId: string, @Param('kidId') kidId: string) {
    return this.toyService.addKidtoToy(+toyId, +kidId);
  }
  @Delete(':toyId/children/:kidId')
  removeKidFromToy(@Param('toyId') toyId: string, @Param('kidId') kidId: string) {
    return this.toyService.removeKidFromToy(+toyId, +kidId);
  }
}
