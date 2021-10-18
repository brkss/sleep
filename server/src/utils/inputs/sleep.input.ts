import { InputType, Field } from "type-graphql";

@InputType()
export class CreateSleepInput {
  @Field(() => Date)
  bedTime: Date;

  @Field(() => Date)
  wakeUp: Date;
}
