import { motion } from "framer-motion";
import Title from "./Title";
import Image from "next/image";
import Whatsapp from "../public/Whatsapp Footer.svg"
import Instagram from "../public/instagram Footer.svg"
import Linkedin from "../public/Linkedin Footer.svg"

export default function Footer() {
  return (
    <>
      <section className="h-[200px] w-screen flex justify-center items-center bg-cover bg-no-repeat bgFooter relative">
        <div className="flex flex-col w-[100%] justify-between absolute bottom-5 left-4 gap-3">
        <div className="flex gap-3">
          <Image src={Whatsapp} alt="Whatsapp" className="w-6"/>
          <Image src={Instagram} alt="Instagram" className="w-6"/>
          <Image src={Linkedin} alt="Linkedin" className="w-6"/>
          </div>
          <span className="font-medium text-xs md:text-sm text-white">
            © 2023 Uprint todos os direitos reservados.
          </span>
        </div>
      </section>
    </>
  );
}
