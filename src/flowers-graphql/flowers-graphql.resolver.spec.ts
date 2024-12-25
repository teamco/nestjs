import { Test, TestingModule } from '@nestjs/testing';
import { FlowersGraphqlResolver } from './flowers-graphql.resolver';
import { FlowersService } from 'src/flowers/flowers.service';

describe('FlowersGraphqlResolver', () => {
  let resolver: FlowersGraphqlResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlowersGraphqlResolver, FlowersService],
    }).compile();

    resolver = module.get<FlowersGraphqlResolver>(FlowersGraphqlResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
