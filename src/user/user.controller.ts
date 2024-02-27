import { Router } from "express";
import userService from "./user.service";

class userController{
    router = Router()

   constructor(){
    this.initRoutes();
   }

   initRoutes(){
    this.router.get("/", userService.getTeste)
    this.router.post("/create", userService.create)
   }
}

export default new userController();