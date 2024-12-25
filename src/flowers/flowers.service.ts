import { Injectable } from '@nestjs/common';
import { Flower } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateFlowersDto, UpdateFlowersDto } from './dto/flowers.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FlowersService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly configService: ConfigService
  ) {}

  async findAll(): Promise<Flower[]> {
    return await this.prismaService.flower.findMany();
  }

  async findOne(id: string): Promise<Flower> {
    return await this.prismaService.flower.findUnique({
      where: { id },
    });
  }

  async create(dto: CreateFlowersDto): Promise<Flower> {
    return await this.prismaService.flower.create({ data: dto });
  }

  async update(id: string, dto: UpdateFlowersDto): Promise<Flower> {
    return await this.prismaService.flower.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string): Promise<Flower> {
    return await this.prismaService.flower.delete({
      where: { id },
    });
  }
}
