import { FormEvent, MutableRefObject } from "react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FiSend } from "react-icons/fi";
import { Button } from "../Button";

interface FormProps {
  handleSubmit: (e: FormEvent) => Promise<void>;
  isSubmiting: boolean;
  isMessageSuccess: boolean;
  form: MutableRefObject<HTMLFormElement>;
}

export function Form({
  handleSubmit,
  isSubmiting,
  isMessageSuccess,
  form,
}: FormProps) {
  return (
    <form
      className="w-full flex flex-col items-center"
      ref={form}
      onSubmit={handleSubmit}
    >
      <h1 className="max-sm:w-1/2 max-sm:mx-auto mt-12 max-sm:text-xs text-lg self-start">
        Mande um e-mail se preferir! 😉
      </h1>

      <div className="max-sm:p-4 w-full max-sm:w-80 flex flex-col bg-secondary rounded-lg mt-12">
        <div className="flex max-sm:flex-col items-center justify-between gap-12 max-sm:gap-4">
          <div className="flex flex-col gap-8 max-sm:gap-4">
            <Input
              className="w-[40rem] max-xl:w-96 max-lg:w-72 max-md:w-72"
              type="text"
              placeholder="Seu nome"
              required
              name="from_name"
              id="from_name"
            />

            <Input
              className="w-[40rem] max-xl:w-96 max-lg:w-72 max-md:w-72"
              type="email"
              placeholder="Endereço de e-mail"
              required
              name="from_email"
              id="from_email"
            />

            <Input
              className="w-[40rem] max-xl:w-96 max-lg:w-72 max-md:w-72"
              type="text"
              placeholder="Título do e-mail"
              required
              name="from_subject"
              id="from_subject"
            />
          </div>

          <Textarea
            className="resize-none h-full max-sm:w-72 max-sm:h-56"
            placeholder="Sua mensagem aqui..."
            required
            name="message"
            id="message"
          />
        </div>

        {!isMessageSuccess ? (
          <Button
            type="submit"
            disabled={isSubmiting}
            variant="solid"
            className="mt-10 max-sm:mt-6 mx-auto flex items-center text-sm font-bold"
          >
            Enviar mensagem
            <FiSend size={18} />
          </Button>
        ) : (
          <button
            disabled
            className="btn mt-12 max-sm:mt-6 self-center w-52 max-sm:w-full p-4 rounded-md font-bold disabled:bg-green-700 disabled:text-green-50"
          >
            Success!
          </button>
        )}
      </div>
    </form>
  );
}
