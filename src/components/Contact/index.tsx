"use client";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FormEvent, MutableRefObject, useRef, useState } from "react";

import { ENV } from "@/env";
import { Form } from "./Form";
import { MdWhatsapp } from "react-icons/md";
import { SocialCard } from "./SocialCard";
import emailjs from "@emailjs/browser";
import { Divider } from "../Divider";

// Array de Objeto da social midia do usuario
const socialMidias = [
  {
    id: 1,
    title: "Linkedin",
    icon: (
      <FaLinkedin className="text-primary text-4xl max-md:text-3xl max-sm:text-xl" />
    ),
    user: "eduardo-rodrigues-93b66518a",
    link: "https://www.linkedin.com/in/eduardo-rodrigues-93b66518a/",
  },
  {
    id: 2,
    title: "Github",
    user: "@edurodrigues0",
    icon: (
      <FaGithub className="text-primary text-4xl max-md:text-3xl max-sm:text-xl" />
    ),
    link: "https://github.com/edurodrigues0",
  },
  {
    id: 3,
    title: "Instagram",
    user: "@edurodriigues0",
    icon: (
      <FaInstagram className="text-primary text-4xl max-md:text-3xl max-sm:text-xl" />
    ),
    link: "https://www.instagram.com/edurodriigues0/",
  },
  {
    id: 4,
    title: "Whatsapp",
    user: "+55 (34) 9 9824-9953",
    icon: (
      <MdWhatsapp className="text-primary text-4xl max-md:text-3xl max-sm:text-xl" />
    ),
    link: " https://wa.me/5534998249953?text=Olá%20Eduardo%20estou%20entrando%20em%20contato...",
  },
];

export function Contact() {
  const form = useRef() as MutableRefObject<HTMLFormElement>;
  const [isMessageSuccess, setIsMessageSuccess] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);

  // funcao para mail trap do emailJS
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsSubmiting(true);

    await emailjs
      .sendForm(
        ENV.NEXT_PUBLIC_EMAILJS_ID,
        "template_cfkr9xa",
        form.current,
        ENV.NEXT_PUBLIC_EMAILJS_PUBLICK_KEY,
      )
      .then(
        (res) => {
          if (res.status === 200) {
            return setIsMessageSuccess(true);
          }
        },
        (error) => {
          console.log(error);
        },
      );
    setIsSubmiting(false);
  }

  return (
    <div
      id="contato"
      className="w-full h-screen max-sm:h-full flex flex-col items-center py-10"
    >
      <Divider title="Contato" />

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
      <Form
        handleSubmit={handleSubmit}
        isMessageSuccess={isMessageSuccess}
        isSubmiting={isSubmiting}
        form={form}
      />
    </div>
  );
}
