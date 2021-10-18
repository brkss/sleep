import * as jwt from "jsonwebtoken";

export const GenerateToken = (uid: string) => {
  const token = jwt.sign({ uid: uid }, "wertyuiopdfghopsadkfhkdweiruoiwerut", {
    expiresIn: "2h",
  });
  return token;
};
