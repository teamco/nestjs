import { Query, Resolver } from '@nestjs/graphql';
import { Flower } from '@prisma/client';
import { FlowersService } from 'src/flowers/flowers.service';
import { FlowerModel } from './flower.model';

@Resolver()
export class FlowersGraphqlResolver {
  constructor(private readonly flowersService: FlowersService) { }

  @Query(() => [FlowerModel], { name: 'flowers' })
  async findAll(): Promise<Flower[]> {
    return this.flowersService.findAll();
  }
}
