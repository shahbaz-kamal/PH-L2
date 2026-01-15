import { ICreatePatient } from "./user.interface";
import bcrypt from "bcryptjs";
import { envVars } from "../../config/env";
import { prisma } from "../../shared/prisma";

const createPatient = async (payload: ICreatePatient) => {
  const hashedPassword = await bcrypt.hash(
    payload.password,
    Number(envVars.BCRYPT_SALT_ROUND)
  );

  const result = await prisma.$transaction(async (tx) => {
    await tx.user.create({
      data: {
        email: payload.email,
        password: hashedPassword,
      },
    });

   return await tx.patient.create({
      data: {
        name: payload.name,
        email: payload.email,
      },
    });
  });
  console.log("Patient-create");
  return result
};

export const UserService = { createPatient };
