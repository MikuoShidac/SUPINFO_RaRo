import express from "express";
import passport from "passport";
import z from "zod";
import { processRequestBody } from "zod-express-middleware";
import UserRepository from "../repositories/UserRepository.js";
import { UserModel } from "../models/UserModel.js";

const router = express.Router();

const UserCreationPayload = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
});

const UserRegisterSchema = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
});

router.get("/", /* adminMiddleware,*/async (req, res) => {
    const users = await UserRepository.listUsers();
    res.json(users);
});

router.post("/register", processRequestBody(UserRegisterSchema), (req, res) => {
    UserModel.register(
      new UserModel({
        username: req.body.username,
        email: req.body.email,
        role: "User",
      }),
      req.body.password,
      (err, account) => {
        if (err) {
          console.error(err);
          return res.status(400).json(err);
        }
  
        passport.authenticate("local")(req, res, () => {
          res.status(201).send("Created");
        });
      }
    );
});
  
router.post("/login", passport.authenticate("local"), (req, res) => {
  res.status(200).send("Logged");
});

router.post("/", processRequestBody(UserCreationPayload), async (req, res) => {
    const payload = req.body;
  
    const user = await UserRepository.createUser({
      role: "User",
      ...payload,
    });
  
    res.status(201).json(user);
});
  
export default router;