import { z } from "zod";

export const signinSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email obrigatório" })
    .email({
      message: "Email invalido",
    })
    .toLowerCase(),
  password: z.string().min(6, { message: "senha com no mínimo 6 carácteres" }),
});
