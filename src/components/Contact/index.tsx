"use client";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FormEvent, MutableRefObject, useRef, useState } from "react";

import { ENV } from "@/env";
import { Form } from "./Form";
import { MdWhatsapp } from "react-icons/md";
import { SocialCard } from "./SocialCard";
import emailjs from "@emailjs/browser";

// Array de Objeto da social midia do usuario
const socialMidias = [
  {
    id: 1,
    title: "Linkedin",
    icon: <FaLinkedin className="text-4xl max-md:text-3xl max-sm:text-xl" />,
    user: "eduardo-rodrigues-93b66518a",
    link: "https://www.linkedin.com/in/eduardo-rodrigues-93b66518a/",
  },
  {
    id: 2,
    title: "Github",
    user: "@edurodrigues0",
    icon: <FaGithub className="text-4xl max-md:text-3xl max-sm:text-xl" />,
    link: "https://github.com/edurodrigues0",
  },
  {
    id: 3,
    title: "Instagram",
    user: "@edurodriigues0",
    icon: <FaInstagram className="text-4xl max-md:text-3xl max-sm:text-xl" />,
    link: "https://www.instagram.com/edurodriigues0/",
  },
  {
    id: 4,
    title: "Whatsapp",
    user: "+55 (34) 9 9824-9953",
    icon: <MdWhatsapp className="text-4xl max-md:text-3xl max-sm:text-xl" />,
    link: " https://wa.me/5534998249953?text=Olá%20Eduardo%20estou%20entrando%20em%20contato...",
  },
];

export function Contact() {
  const form = useRef() as MutableRefObject<HTMLFormElement>;
  const [isMessageSuccess, setIsMessageSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Função para envio de email via EmailJS
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await emailjs.sendForm(
        ENV.NEXT_PUBLIC_EMAILJS_ID,
        "template_cfkr9xa",
        form.current,
        ENV.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );

      if (response.status === 200) {
        setIsMessageSuccess(true);
        form.current.reset();
      } else {
        setError("Erro ao enviar mensagem. Tente novamente.");
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Erro ao enviar mensagem. Por favor, tente novamente mais tarde.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-full h-screen max-sm:h-full flex flex-col items-center py-16 px-10">
      <h1 className="text-5xl max-xl:text-4xl max-md:text-3xl max-sm:text-2xl text-cyan-400 font-bold">
        Contato
      </h1>
      <p className="mt-20 self-start text-lg max-sm:text-xs max-sm:w-1/2 max-sm:mx-auto text-slate-300">
        Sinta-se a vontade para entrar em contato comigo, será um prazer
        atende-lo.
        <br />
        Estou disponivel todos os dias.
      </p>

      {/* Cards de informacao de contato */}
      <div className="mt-20 w-full flex justify-between flex-wrap max-sm:flex-col max-sm:items-center gap-2 max-md:gap-1 max-sm:gap-4">
        {socialMidias.map((social) => {
          return (
            <SocialCard
              key={social.id}
              icon={social.icon}
              link={social.link}
              title={social.title}
              user={social.user}
            />
          );
        })}
      </div>

      {/* Formulario */}
      {error && (
        <div
          className="mt-6 p-4 bg-red-900/20 border border-red-500 rounded-lg text-red-300"
          role="alert"
          aria-live="polite"
        >
          <p className="text-sm">{error}</p>
        </div>
      )}
      <Form
        handleSubmit={handleSubmit}
        isMessageSuccess={isMessageSuccess}
        isSubmitting={isSubmitting}
        form={form}
      />
    </div>
  );
}
