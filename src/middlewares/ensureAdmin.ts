import { getCustomRepository } from "typeorm";
import { Request, Response, NextFunction } from "express";
import { UserRepository } from "../repositories/UserRepository";
export async function ensureAdmin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { user_id } = req;

  const userRepository = getCustomRepository(UserRepository);

  const user = await userRepository.findOne(user_id);

  if (user.admin) {
    return next();
  }

  return res.status(401).json({
    error: "Unauthorized",
  });
}
