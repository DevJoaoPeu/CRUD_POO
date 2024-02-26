import express, { json } from "express";

class User {
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
    this.express.use()
  }
}
