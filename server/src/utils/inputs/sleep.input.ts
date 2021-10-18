import { InputType, Field } from "type-graphql";

@InputType()
export class CreateSleepInput {
  @Field(() => String)
  bedTime: string;

  @Field(() => String)
  wakeUp: string;
}
