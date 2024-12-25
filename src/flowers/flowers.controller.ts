import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { FlowersService } from './flowers.service';
// import { ParseIntPipe } from 'src/conception/pipe';
import { AuthGuard } from 'src/conception/guard';
import { LoggerInterceptor } from 'src/conception/interceptor';
import { Flower } from '@prisma/client';
import { CreateFlowersDto, UpdateFlowersDto } from './dto/flowers.dto';

@Controller('flowers')
@UseInterceptors(LoggerInterceptor)
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}

  @Get()
  // @UseGuards(AuthGuard)
  // findAll(@Query('pageNumber', ParseIntPipe) pageNumber: number): string[] {
  async findAll(): Promise<Flower[]> {
    return await this.flowersService.findAll();
  }

  @Get(':id')
  // @UseGuards(AuthGuard)
  async findOne(@Param('id') id: string): Promise<Flower> {
    return await this.flowersService.findOne(id);
  }

  @Post()
  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe())
  async create(@Body() dto: CreateFlowersDto): Promise<Flower> {
    console.log('dto', dto);
    return await this.flowersService.create(dto);
  }  

  @Put(':id')
  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe())
  async update(@Param('id') id: string, @Body() dto: UpdateFlowersDto): Promise<Flower> {
    return await this.flowersService.update(id, dto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe())
  async remove(@Param('id') id: string): Promise<Flower> {
    return await this.flowersService.remove(id);
  }
}
