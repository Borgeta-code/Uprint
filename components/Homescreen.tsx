import { motion } from "framer-motion";
import Image from "next/image";
import arrowDown from "../public/ArrowDown.svg";

export default function Homescreen() {

  const smoothScrollToContact = () => {
    const contact = document.getElementById("contact");
    if (contact !== null) {
      contact.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
  };

  const smoothScrollToAbout = () => {
    const contact = document.getElementById("about");
    if (contact !== null) {
      contact.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section className="h-screen flex justify-center items-center bgHome bg-cover bg-no-repeat relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 20,
            delay: 0.3,
          }}
          className="flex justify-center items-center p-2 flex-col gap-6 mt-[120px]"
        >
          <h1 className="font-bold text-5xl md:text-7xl text-center">
            Transforming dreams into <span className="gradient">print</span>.
          </h1>
          <span className="text-base text-black opacity-40 font-medium w-[90vw] md:w-[600px] text-center">
            Entre em contato para discutir suas ideias e fazer um orçamento!
          </span>
          <motion.div
            whileTap={{ opacity: 0.8, scale: .9 }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
            className="gradientBg p-[2px] w-max"
          >
            <button 
            onClick={smoothScrollToContact}
            className="py-3 px-7 text-white btnGradient font-bold button">
              Entre em contato
            </button>
          </motion.div>
          <div className="flex justify-center items-center gap-6">
            <div className="h-[2px] bg-black w-8 opacity-30 rounded-md" />
            <span className="text-sm text-black opacity-30 font-medium">
              ou
            </span>
            <div className="h-[2px] bg-black w-8 opacity-30 rounded-md" />
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <a onClick={smoothScrollToAbout} className="font-bold text-base -mb-1 opacity-70 cursor-pointer">
              Saiba mais
            </a>
            <Image
              src={arrowDown}
              alt="arrow down"
              className="w-[15px] opacity-70"
              draggable="false"
            />
          </div>
        </motion.div>
      </section>
    </>
  );
}
