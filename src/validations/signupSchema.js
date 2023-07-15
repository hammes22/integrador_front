import { z } from "zod";

export const signupSchema = z.object({
  name: z.string().min(1, { message: "Nome obrigatório" }).toLowerCase(),
  email: z
    .string()
    .min(1, { message: "Email obrigatório" })
    .email({
      message: "Email invalido",
    })
    .toLowerCase(),
  password: z.string().min(6, { message: "Senha com no mínimo 6 carácteres" }),
  aceite: z
    .boolean()
    .refine((aceite) => aceite, { message: "Concorde com os termos" }),
});
