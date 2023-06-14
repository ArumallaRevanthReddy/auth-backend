import { Request, Response } from "express";
import { IUser } from "../../dto/User.dto";
import { AuthService } from "../../data/data-access/auth.service";

export class AuthController {
  private static jwt = require("jsonwebtoken");
  private static authService: AuthService = new AuthService();

  public loginController = async (req: Request, res: Response) => {
    const password = req.body.password;
    const email = req.body.email;
    if (!email || !password) {
      res.status(400);
      throw new Error("email or password fields are mandatory");
    }
    const user: IUser | null = await AuthController.authService.getUser(email);
    console.log(user);
    if (user && password === user.pwd) {
      const accessToken = AuthController.jwt.sign(
        {
          user: {
            email: user.email,
            role: user.role,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "30m" }
      );
      res.status(200).json({ accessToken });
    } else {
      res.status(401);
      throw new Error("email and password are not valid");
    }
  };

  public registrationController = async (req: Request, res: Response) => {
    console.log(req.body);
    const password = req.body.password;
    const email = req.body.email;
    const role = req.body.role;
    if (!email || !password) {
      res.status(400);
      throw new Error("email or password field are not proper");
    }
    const userAvailable = false;
    if (userAvailable) {
      res.status(400);
      throw new Error("user already exists");
    }
    await AuthController.authService.createUser({
      email,
      pwd: password,
      role,
    });
    res.status(200).json({ message: "user registered succesfully" });
  };
}
