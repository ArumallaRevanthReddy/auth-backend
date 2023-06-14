import { Router } from "express";
import { AuthController } from "./auth.controller";
import { UserLoginSchema, UserRegistrationSchema } from "./auth.schema";

const router: Router = Router();
const validate = require("express-jsonschema").validate;
const asyncHandler = require("express-async-handler");
const authController: AuthController = new AuthController();

router.post(
  "/login",
  validate({ body: UserLoginSchema }),
  asyncHandler(authController.loginController)
);
router.post(
  "/register",
  validate({ body: UserRegistrationSchema }),
  asyncHandler(authController.registrationController)
);

module.exports = router;
