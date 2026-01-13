import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import { UserService } from "./user.service";

const createPatient = catchAsync((req: Request, res: Response) => {
  UserService.createPatient();

  res.json("Success");
});

export const UserController = { createPatient };
