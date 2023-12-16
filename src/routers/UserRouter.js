import express from "express";
import passport from "../passport.js";
import z from "zod";
import { processRequestBody } from "zod-express-middleware";
import UserRepository from "../repositories/UserRepository.js";
import { UserModel } from "../models/UserModel.js";
import { adminMiddleware } from "../middlewares/adminMiddleware.js";
import { employeeMiddleware } from "../middlewares/employeeMiddleware.js";
import { userMiddleware } from "../middlewares/userMiddleware.js";

const router = express.Router();

const UserCreationPayload = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string().min(12),
});

const UserRegisterSchema = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string().min(12),
    role: z.enum(["User", "Employee"])
});

router.get("/", employeeMiddleware, async (req, res) => {
    const users = await UserRepository.listUsers();
    res.json(users);
});

router.post("/register", processRequestBody(UserRegisterSchema), (req, res) => {
  if (req.user?.role === null){
    UserModel.register(
      new UserModel({
        username: req.body.username,
        email: req.body.email,
        role: req.body.role,
        password: req.body.password,
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
  }else{
    return res.status(403).json("You can't register if logged in");
  }
});
  
router.post("/login", passport.authenticate("local"), (req, res) => {
  res.status(200).send("Logged");
});

router.put("/update", userMiddleware, processRequestBody(UserCreationPayload), async (req, res)=>{
  if (req.user?.role !== null){
    try{
        const id = req.user?.id;
        const role = req.user?.role;
        const user = await UserRepository.updateUser(id,req.body,role);
        res.json(req.body);
    }catch (e){
        console.log(e);
        return res.status(500).send("Internal server error");
    }
  }else{
    return res.status(403).json("You need to be logged in to update your accout");
  }
});

router.post("/delete/:id", async (req, res)=> {
  if (req.user?.role !== undefined){
    const id = await req.params.id;

    if(id !== req.user?.id){
      res.status(403).json("FORBIDDEN \n YOU DON'T HAVE THE RIGHT TO DELETE ANOTHER ACCOUNT THAN YOURS !");
    }else{
      req.logOut(function(err){
        if (err){return next(err);}
      });

      UserRepository.deleteUser(id);
      res.status(204).send();
    }
  }else{
    return res.status(403).json("You need to be logged in to delete your accout");
  }
});

router.get("/logout", async (req, res)=>{
  if (req.user?.role !== null){
    req.logOut(function(err){
      if (err){return next(err);}
    });
    res.status(204).send();
  }else{
    return res.status(403).json("You need to be logged in to log out");
  }
});

export default router;