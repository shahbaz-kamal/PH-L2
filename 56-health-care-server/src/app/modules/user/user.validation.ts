import z from "zod";

const createUserZodSchema = z.object({
  password: z.string({
    error: "Password is required",
  }),
  patient: {
    name: z
      .string({
        error: "Name is Required",
      })
      .min(2, "Name must be at leas two characters")
      .max(100, "Name can not exceed 100 characters"),

    email: z.string({ error: "Email is required" }),
    address: z.string().optional(),
  },
});

export const UserValidation = { createUserZodSchema };
