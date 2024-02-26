import { Router } from "express";
import service from "./service";

class userController{
    router: Router;

   constructor(){
    this.router = Router()
    this.initRoutes();
   }

   initRoutes(){
    this.router.get("/", service.getTeste)
   }
}

export default new userController();