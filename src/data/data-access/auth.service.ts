import { IUser } from "../../dto/User.dto";
import { prismaClient } from "../dataclient";

export class AuthService {
  public getUser(email: string): Promise<IUser | null> {
    return prismaClient.user.findFirst({ where: { email } });
  }

  public createUser(user: IUser): Promise<IUser> {
    return prismaClient.user.create({ data: user });
  }
}
