'use client'

import { FormEvent, MutableRefObject, useRef, useState } from "react";

import { Card } from "@/components/ui/card";
import { ENV } from "@/env";
import { Input } from "@/components/ui/input";
import { MdAlternateEmail } from "react-icons/md";
import { Textarea } from "@/components/ui/textarea";
import emailjs  from '@emailjs/browser'
import { z } from "zod"

export function Contact() {
  const form = useRef() as MutableRefObject<HTMLFormElement>
  const [isMessageSuccess, setIsMessageSuccess] = useState(false)
  const [isSubmiting, setIsSubmiting] = useState(false)

  const envSchema = z.object({
    EMAILJS_ID: z.string().url(),
});

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsSubmiting(true);

    await emailjs
    .sendForm(ENV.NEXT_PUBLIC_EMAILJS_ID, 'template_cfkr9xa', form.current, ENV.NEXT_PUBLIC_EMAILJS_PUBLICK_KEY)
    .then((res) => {
      if (res.status === 200) {
        return setIsMessageSuccess(true)
      }
    }, (error) => {
      console.log(error)
    })
    setIsSubmiting(false);
  }

  return (
    <div id="contact" className="w-full h-screen max-sm:h-full flex flex-col items-center py-10">
      <h1 className="text-4xl max-md:text-2xl max-sm:text-lg mb-20">
        Contact me
      </h1>

      <div className="w-full flex justify-between">
        <Card className="flex items-center gap-4 p-4 w-96">
          <MdAlternateEmail className="text-primary" size={36} />
          <div className="flex flex-col">
            <span>Email</span>
            <span>name@example.com</span>
          </div>
        </Card>

        <Card className="flex items-center gap-4 p-4 w-96">
          <MdAlternateEmail className="text-primary" size={36} />
          <div className="flex flex-col">
            <span>Email</span>
            <span>name@example.com</span>
          </div>
        </Card>

        <Card className="flex items-center gap-4 p-4 w-96">
          <MdAlternateEmail className="text-primary" size={36} />
          <div className="flex flex-col">
            <span>Email</span>
            <span>name@example.com</span>
          </div>
        </Card>

        <Card className="flex items-center gap-4 p-4 w-96">
          <MdAlternateEmail className="text-primary" size={36} />
          <div className="flex flex-col">
            <span>Email</span>
            <span>name@example.com</span>
          </div>
        </Card>
      </div>

      <form
        className="w-full flex flex-col items-center"
        ref={form}
        onSubmit={handleSubmit}
      >
        <h1 className="mt-12 max-sm:text-sm">
          <span className="text-primary">Contact</span> Form
        </h1>

        <div className="p-8 w-full flex flex-col bg-secondary rounded-lg mt-12">
          <div className="flex items-center justify-between gap-12">
            <div className="flex flex-col gap-8">
              <Input
                className="w-[40rem]"
                type="text"
                placeholder="Full name"
                required
                name="from_name"
                id="from_name"
              />

              <Input
                className="w-[40rem]"
                type="email"
                placeholder="Email address"
                required
                name="from_email"
                id="from_email"
              />

              <Input
                className="w-[40rem]"
                type="text"
                placeholder="Subject"
                required
                name="from_subject"
                id="from_subject"
              />
            </div>

            <Textarea
              className="resize-none h-full"
              placeholder="Your message here..."
              required
              name="message"
              id="message"
            />
          </div>
          
          {
            !isMessageSuccess ? (
             <button
                disabled={isSubmiting}
                type="submit"
                className="btn bg-primary mt-12 self-center w-52 text-bold hover:bg-orange-700"
              >
                Send
              </button>
            ) : (
              <button disabled className="btn mt-12 self-center w-52 text-bold disabled:bg-green-600 disabled:text-green-50">
                Success!
              </button>
            )
          }
        </div>
      </form>
    </div>
  )
}