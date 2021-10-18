import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class GenUserResponse {
  @Field(() => String)
  token: string;
}
