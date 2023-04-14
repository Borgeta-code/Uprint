import { motion } from "framer-motion";
import Image from "next/image";
import arrowDown from "../public/ArrowDown.svg";
import Whatsapp from "../public/Whatsapp Footer.svg";
import Instagram from "../public/instagram Footer.svg";
import Linkedin from "../public/Linkedin Footer.svg";

export default function Homescreen() {
  return (
    <>
      <section className="h-screen flex flex-col justify-center items-center bgHome bg-cover bg-no-repeat relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 20,
            delay: 0.3,
          }}
          className="flex justify-center items-center p-2 flex-col gap-6 mt-[60px]"
        >
          <h1 className="font-bold text-5xl md:text-7xl text-center">
            Estamos quase <span className="gradient">prontos</span>.
          </h1>
          <span className="text-base text-black opacity-40 font-medium w-[90vw] md:w-[800px] text-center">
            Estamos melhorando isso para você. Volte em breve para conferir!
          </span>
        </motion.div>

        <div className="flex flex-col w-[100%] justify-center items-center absolute bottom-0 gap-3 p-3">
          <div className="flex gap-3">
            <a href="" target="_blank" rel="noopener">
              <Image src={Whatsapp} alt="Whatsapp" className="w-6" />
            </a>
            <a href="" target="_blank" rel="noopener">
              <Image src={Instagram} alt="Instagram" className="w-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/uprintdreams/"
              target="_blank"
              rel="noopener"
            >
              <Image src={Linkedin} alt="Linkedin" className="w-6" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
