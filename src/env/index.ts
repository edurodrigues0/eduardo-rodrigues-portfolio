import z from "zod";

// Validacao de variaveis ambientes

const envSchema = z.object({
  NEXT_PUBLIC_EMAILJS_ID: z.string(),
  NEXT_PUBLIC_EMAILJS_PUBLICK_KEY: z.string(),
});

export const ENV = envSchema.parse({
  NEXT_PUBLIC_EMAILJS_ID: process.env.NEXT_PUBLIC_EMAILJS_ID,
  NEXT_PUBLIC_EMAILJS_PUBLICK_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLICK_KEY,
});
