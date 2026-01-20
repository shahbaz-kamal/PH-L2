import { ICreatePatient } from "./user.interface";
import bcrypt from "bcryptjs";
import { envVars } from "../../config/env";
import { prisma } from "../../shared/prisma";
import { Request } from "express";
import { fileUploader } from "../../../utils/fileUploader";

const createPatient = async (req: Request) => {
  const hashedPassword = await bcrypt.hash(
    req.body.password,
    Number(envVars.BCRYPT_SALT_ROUND),
  );

  if (req.file) {
    const uploadedResult = fileUploader.uploadToCloudinary(req.file);
    console.log(req.file);
  }
  // const result = await prisma.$transaction(async (tx) => {
  //   await tx.user.create({
  //     data: {
  //       email: req.body.email,
  //       password: hashedPassword,
  //     },
  //   });

  //   return await tx.patient.create({
  //     data: {
  //       name: req.body.name,
  //       email: req.body.email,
  //     },
  //   });
  // });
  // console.log("Patient-create");
  return req.file;
};

export const UserService = { createPatient };
