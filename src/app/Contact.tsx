"use client";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FormEvent, MutableRefObject, useRef, useState } from "react";
import { MdAlternateEmail, MdWhatsapp } from "react-icons/md";

import { Card } from "@/components/ui/card";
import { ENV } from "@/env";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";

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
    user: "@EduRodriguesDev",
    icon: (
      <FaGithub className="text-primary text-4xl max-md:text-3xl max-sm:text-xl" />
    ),
    link: "https://github.com/EduRodriguesDev",
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
    link: "https://web.whatsapp.com/send?phone=5534998249953",
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
      id="contact"
      className="w-full h-screen max-sm:h-full flex flex-col items-center py-10"
    >
      <h1 className="text-4xl max-md:text-2xl max-sm:text-lg mb-20">
        Contact me
      </h1>

      {/* Cards de informacao de contato */}
      <div className="w-full flex justify-between flex-wrap max-sm:flex-col max-sm:items-center gap-2 max-md:gap-1 max-sm:gap-4">
        {socialMidias.map((social) => {
          return (
            <a key={social.id} href={social.link} target="_blank">
              <Card className="flex items-center gap-4 p-4 w-80 max-md:w-52">
                {social.icon}
                <div className="flex flex-col">
                  <span className="font-bold max-md:text-xs">
                    {social.title}
                  </span>
                  <span className="text-muted-foreground text-sm max-md:text-[0.5rem]">
                    {social.user}
                  </span>
                </div>
              </Card>
            </a>
          );
        })}
      </div>

      {/* Formulario */}
      <form
        className="w-full flex flex-col items-center"
        ref={form}
        onSubmit={handleSubmit}
      >
        <h1 className="mt-12 max-sm:text-sm">
          <span className="text-primary">Contact</span> Form
        </h1>

        <div className="p-8 max-sm:p-4 w-full max-sm:w-80 flex flex-col bg-secondary rounded-lg mt-12">
          <div className="flex max-sm:flex-col items-center justify-between gap-12 max-sm:gap-4">
            <div className="flex flex-col gap-8 max-sm:gap-4">
              <Input
                className="w-[40rem] max-lg:w-96 max-md:w-72"
                type="text"
                placeholder="Full name"
                required
                name="from_name"
                id="from_name"
              />

              <Input
                className="w-[40rem] max-lg:w-96 max-md:w-72"
                type="email"
                placeholder="Email address"
                required
                name="from_email"
                id="from_email"
              />

              <Input
                className="w-[40rem] max-lg:w-96 max-md:w-72"
                type="text"
                placeholder="Subject"
                required
                name="from_subject"
                id="from_subject"
              />
            </div>

            <Textarea
              className="resize-none h-full max-sm:w-72 max-sm:h-56"
              placeholder="Your message here..."
              required
              name="message"
              id="message"
            />
          </div>

          {!isMessageSuccess ? (
            <button
              disabled={isSubmiting}
              type="submit"
              className="btn bg-primary mt-12 max-sm:mt-6 self-center w-52 font-bold hover:bg-orange-700"
            >
              Send
            </button>
          ) : (
            <button
              disabled
              className="btn mt-12 max-sm:mt-6 self-center w-52 font-bold disabled:bg-green-600 disabled:text-green-50"
            >
              Success!
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
