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
import { Sleep } from "../entity/Sleep";
import { User } from "../entity/User";

@Resolver()
export class SleepResolver {
  @UseMiddleware(isValid)
  @Query(() => [Sleep])
  async sleeps(@Ctx() ctx: MyContext): Promise<Sleep[]> {
    const user = await User.findOne({ where: { id: ctx.payload.uid } });
    const sleeps = await Sleep.find({ where: { user: user } });

    return sleeps;
  }

  @UseMiddleware(isValid)
  @Mutation(() => Boolean)
  async createSleep(
    @Arg("data") data: CreateSleepInput,
    @Ctx() ctx: MyContext
  ): Promise<boolean> {
    if (!data || !data.wakeUp || !data.bedTime) {
      return false;
    }
    const user = await User.findOne({ where: { id: ctx.payload.uid } });
    if (!user) {
      return false;
    }

    try {
      const sleep = new Sleep();
      sleep.bedTime = data.bedTime;
      sleep.wakeUp = data.wakeUp;
      sleep.user = user;
      await sleep.save();
    } catch (e) {
      console.log("error accured creatiing sleep record => ", e);
      return false;
    }
    return true;
  }
}
