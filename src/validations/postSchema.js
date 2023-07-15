import { z } from "zod";

export const postSchema = z.object({
  content: z
    .string({ required_error: "Mensagem obrigatória" })
    .min(1, { message: "Mensagem obrigatória" }),
});
