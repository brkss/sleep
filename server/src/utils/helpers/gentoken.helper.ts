import * as jwt from "jsonwebtoken";

export const GenerateToken = (uid: string) => {
  const token = jwt.sign({ uid: uid }, process.env.TOKEN_SECRET!, {
    expiresIn: "30s",
  });
  return token;
};
