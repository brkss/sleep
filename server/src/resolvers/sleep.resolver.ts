import { MyContext } from "../utils/types/MyContext";
import {
  Resolver,
  Query,
  Mutation,
  Arg,
  UseMiddleware,
  Ctx,
} from "type-graphql";
import { CreateSleepInput } from "../utils/inputs";
import { isValid } from "../utils/middlewares/valid.md";

@Resolver()
export class SleepResolver {
  @UseMiddleware(isValid)
  @Mutation(() => Boolean)
  async createSleep(
    @Arg("data") data: CreateSleepInput,
    @Ctx() ctx: MyContext
  ): Promise<boolean> {
    console.log(ctx);
    if (!data || !data.wakeUp || !data.bedTime) {
      return false;
    }

    return true;
  }
}
