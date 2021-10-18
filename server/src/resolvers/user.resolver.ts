import { Resolver, Query, Mutation } from "type-graphql";
import { User } from "../entity/User";
import { GenUserResponse } from "../utils/reponses";
import { GenerateToken } from "../utils/helpers";

@Resolver()
export class UserResolver {
  @Query(() => String)
  hello() {
    return "hi !";
  }

  // create user and generate unique token
  @Mutation(() => GenUserResponse)
  async genUserToken(): Promise<GenUserResponse> {
    const user = new User();
    await user.save();
    return {
      token: GenerateToken(user.id),
    };
  }
}
