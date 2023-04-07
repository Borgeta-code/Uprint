import Image from "next/image";
import dot from "../public/dot.svg";
import { motion } from "framer-motion";

type props = {
  title: string;
};

export default function Title(props: props) {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
          staggerChildren: 0.3,
        }}
        className="text-xl font-bold uppercase absolute top-[85px] left-4 flex gap-2"
      >
        <Image src={dot} alt="dot" className="w-[20px]" draggable="false" />
        {props.title}
      </motion.h1>
    </>
  );
}
