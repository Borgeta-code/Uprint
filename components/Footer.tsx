import { motion } from "framer-motion";
import Title from "./Title";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <section className="h-[200px] w-screen flex justify-center items-center bg-cover bg-no-repeat bgFooter relative">
        <div className="w-[90%] flex justify-between items-center absolute bottom-3 left-3">
          <span className="font-bold text-xs md:text-base text-white">
            © 2023 Uprint todos os direitos reservados.
          </span>
        </div>
      </section>
    </>
  );
}
