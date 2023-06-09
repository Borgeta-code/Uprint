import { motion } from "framer-motion";
import Title from "./Title";
import Image from "next/image";
import Telephone from "../public/telephone.svg";
import Linkedin from "../public/linkedin.svg";
import Whatsapp from "../public/whatsapp.svg";
import Instagram from "../public/instagram.svg";

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="h-screen flex flex-col justify-center items-center bg-cover bg-no-repeat relative "
      >
        <Title title="Entre em contato" />

        <div className="flex flex-col md:flex-row gap-10 mt-[30px] sm:mt-[110px]">
          <div className="flex flex-col  items-center justify-center sm:items-start sm:justify-start gap-5 sm:gap-3">
            <h1 className="font-bold text-3xl sm:text-2xl">Fale conosco</h1>
            <span className="font-semibold text-base sm:text-sm opacity-30">
              Para dúvidas, entre em contato:
            </span>
            <div className="flex gap-5 sm:gap-3">
              <Image
                src={Whatsapp}
                alt="Whatsapp"
                className="w-10 sm:w-6"
                draggable="false"
              />
              <Image
                src={Instagram}
                alt="Instagram"
                className="w-10 sm:w-6"
                draggable="false"
              />
              <Image
                src={Linkedin}
                alt="Linkedin"
                className="w-10 sm:w-6"
                draggable="false"
              />
            </div>
            <div className="flex justify-center items-center gap-4">
              <div className="h-[2px] bg-black w-12 sm:w-6 opacity-30 rounded-md" />
              <span className="sm:text-sm text-base text-black opacity-30 font-medium">
                ou
              </span>
              <div className="h-[2px] bg-black w-12 sm:w-6 opacity-30 rounded-md" />
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-xl sm:text-base">
                (11) 95794-3978
              </span>
              <Image
                src={Telephone}
                alt="Telefone"
                className="w-6 sm:w-4"
                draggable="false"
              />
            </div>
          </div>

          {/* formulario */}

          <div className="hidden sm:flex flex-col justify-center items-center gap-5">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-2">
              {/* Nome */}
              <div className="gradientInput p-[2px] w-max relative">
                <span className="absolute text-xs font-bold -top-3 left-6 p-1 bg-white text-black">
                  Nome
                </span>
                <input
                  type="text"
                  className="px-3 py-2 text-black rounded-[13px] bg-white outline-0 w-[90vw] sm:w-[200px]"
                />
              </div>

              {/* Telefone */}
              <div className="gradientInput p-[2px] w-max relative">
                <span className="absolute text-xs font-bold -top-3 left-6 p-1 bg-white text-black">
                  Telefone
                </span>
                <input
                  type="text"
                  className="px-3 py-2 text-black rounded-[13px] bg-white outline-0 w-[90vw] sm:w-[200px]"
                />
              </div>
            </div>

            {/* Assunto */}

            <div className="flex justify-center items-center gradientTextarea p-[2px] w-max relative">
              <span className="absolute text-xs font-bold -top-3 left-6 p-1 bg-white text-black">
                Mensagem
              </span>
              <textarea
                cols={30}
                rows={5}
                className="px-3 py-2 text-black rounded-[18px] bg-white outline-0 resize-none w-[90vw] sm:w-[400px]"
              />
            </div>

            <button className="py-2 px-12 text-white font-bold bg-black rounded-[15px] text-sm">
              Enviar
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
