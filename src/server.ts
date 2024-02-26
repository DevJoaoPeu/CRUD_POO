import express, { json } from "express";
import userController from "./user/user.controller";

class App {
  public express: express.Application;

  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(json());
  }

  routes() {
    this.express.use(userController.router);
  }

  listen(port: number, callback: () => void): void {
    this.express.listen(port, callback);
  }
}

export default new App();
