import { Request, Response } from "express";
import { prisma } from "../prisma/api";

interface PropsBody {
  name: string;
  email: string;
  password: string;
}

class userService {
  public getTeste(req: Request, res: Response) {
    return res.json({ ok: true });
  }

  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const { name, email, password }: PropsBody = req.body;

      const response = await prisma.user.create({
        data: {
          name,
          email,
          password,
        },
      });

      return res.json({
        message: "Usuário criado com sucesso!",
        response,
      });
    } catch (error) {
      return res.json({
        message: "Erro! Tente mais tarde",
      });
    }
  }
}

export default new userService();
