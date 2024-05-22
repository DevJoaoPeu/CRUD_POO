import { Request, Response, Router } from "express";
import { prisma } from "../prisma/api";

interface PropsBody {
  name: string;
  email: string;
  password: string;
}

interface PropsBodyPut {
  name: string;
  email: string;
  password: string;
  id: string;
}

class userController {
  router: Router = Router();

  async deleteUser(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const response = await prisma.user.delete({ where: { id: userId } });
      return res.json({ message: "Usuário deletado com sucesso!", response });
    } catch (error) {
      return res.json({ message: error.message });
    }
  }

  public async getUserById(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const response = await prisma.user.findFirst({ where: { id: userId } });
      if (!response) {
        return res.json({
          message: "Usuario não encontrado",
        });
      }

      return res.json(response);
    } catch (error) {
      return res.json({ message: error.message });
    }
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
        message: error.message,
      });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      const { userId } = req.params;
      const { name, email, password }: PropsBodyPut = req.body;

      const user = await prisma.user.update({
        where: { id: userId },
        data: { name, email, password },
      });

      return res.json({
        message: "Usuário atualizado com sucesso!",
        user,
      });
    } catch (error) {
      return res.json({
        message: error.message,
      });
    }
  }
}

export default new userController();
