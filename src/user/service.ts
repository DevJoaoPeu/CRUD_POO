import { Request, Response } from "express";

class userService {
  public getTeste(req: Request, res: Response) {
    return res.json({ ok: true });
  }
}

export default new userService();
