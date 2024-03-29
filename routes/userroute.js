import express from "express";
import validateBody from "../helpers/validateBody.js";
import { registerSchema, loginSchema } from "../schemas/userSchema.js";
import { registerUser, loginUser } from "../controllers/userControllers.js";
const userRoute = express.Router();

userRoute.post("/signup", validateBody(registerSchema), registerUser);
userRoute.post("/login", validateBody(loginSchema), loginUser);
userRoute.post("/logout");
userRoute.get("/current");

export default userRoute;
