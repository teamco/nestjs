import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';

export class CreateFlowersDto {

  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsString()
  color: string;

  @IsNumber()
  quantity: number;

  @IsString()
  thumbnail: string;
}

export class UpdateFlowersDto extends PartialType(CreateFlowersDto) {}