import { Field, Float, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class FlowerModel {

  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => Float)
  price: number;

  @Field(() => String)
  color: string;

  @Field(() => Int)
  quantity: number;

  @Field(() => String)
  thumbnail: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date
}