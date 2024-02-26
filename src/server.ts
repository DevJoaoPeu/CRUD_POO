import express, { json } from "express";

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
    this.express.use();
  }

  listen(port: number): void {
    this.express.listen(port);
  }
}

export default new App();
