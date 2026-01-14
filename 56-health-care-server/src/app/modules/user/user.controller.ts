import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import { UserService } from "./user.service";

const createPatient = catchAsync((req: Request, res: Response) => {
  const newUser = req.body;
  console.log(newUser);
  const result = UserService.createPatient(newUser);

  res.json(result);
});

export const UserController = { createPatient };
