import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Title from "./Title";
import Image from "next/image";
import speed from "../public/speed.svg";
import efficiency from "../public/efficiency.svg";
import quality from "../public/quality.svg";

export default function About() {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.2,
        delay: 0.7,
      },
    },
  };

  return (
    <>
      <section className="h-screen flex flex-col justify-center items-center bg-cover bg-no-repeat relative ">
        <Title title="Sobre" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 20,
            delay: 0.2,
          }}
          className="text-center flex items-center justify-center flex-col gap-2 mt-14"
        >
          <h1 className="font-bold text-2xl md:text-5xl">
            Nosso foco é sua <span className="gradient">satisfação</span>.
          </h1>
          <span className="font-semibold text-[11px] md:text-[15px] opacity-50 w-[90vw] md:w-[700px]">
            Somos uma equipe especializada em estilização, impressão e
            instalação de pistas de dança personalizadas que agregam valor ao
            seu evento, com uma abordagem eficaz e um olhar atento aos detalhes.
            Seja um casamento, uma festa de aniversário ou um evento corporativo
            podemos ajudá-lo a transformar sua ideia em um espaço de dança
            vibrante e memorável, com:
          </span>
        </motion.div>

        <motion.ul
          variants={container}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          className="flex justify-center items-center gap-2 md:gap-10 mt-8 flex-wrap"
        >
          <motion.li
            variants={item}
            className="flex flex-col justify-center items-center gap-2 md:gap-3"
          >
            <Image src={speed} alt="velocidade" className=" w-12 md:w-20" />
            <span className="font-semibold text-[#c1c1c1]">Velocidade.</span>
          </motion.li>

          <motion.li variants={item}>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 20,
                delay: 1.8,
              }}
              viewport={{ once: true }}
              className="h-[2px] bg-black w-6 md:w-14 opacity-10 rounded-md"
            />
          </motion.li>

          <motion.li
            variants={item}
            className="flex flex-col justify-center items-center gap-2"
          >
            <Image src={efficiency} alt="eficiência" className="w-12 md:w-20" />
            <span className="font-semibold text-[#c1c1c1]">Eficiência.</span>
          </motion.li>

          <motion.li variants={item}>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 20,
                delay: 1.8,
              }}
              viewport={{ once: true }}
              className="h-[2px] bg-black w-6 md:w-14 opacity-10 rounded-md"
            />
          </motion.li>

          <motion.li
            variants={item}
            className="flex flex-col justify-center items-center gap-2"
          >
            <Image src={quality} alt="qualidade" className="w-12 md:w-20" />
            <span className="font-semibold text-[#c1c1c1]">Qualidade.</span>
          </motion.li>
        </motion.ul>
      </section>
    </>
  );
}
