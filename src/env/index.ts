import z from "zod";

// Validação de variáveis de ambiente

const envSchema = z.object({
  NEXT_PUBLIC_EMAILJS_ID: z.string().min(1, {
    message: "NEXT_PUBLIC_EMAILJS_ID é obrigatório",
  }),
  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: z.string().min(1, {
    message: "NEXT_PUBLIC_EMAILJS_PUBLIC_KEY é obrigatório",
  }),
  PRISMIC_ACCESS_TOKEN: z.string().optional(),
});

export const ENV = envSchema.parse({
  NEXT_PUBLIC_EMAILJS_ID: process.env.NEXT_PUBLIC_EMAILJS_ID,
  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  PRISMIC_ACCESS_TOKEN: process.env.PRISMIC_ACCESS_TOKEN,
});
