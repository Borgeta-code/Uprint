import { motion } from "framer-motion";
import Title from "./Title";
import Image from "next/image";

export default function About() {
  return (
    <>
      <section className="h-screen flex flex-col justify-center items-center bg-cover bg-no-repeat relative ">
        <Title title="Trabalhos" />
      </section>
    </>
  );
}
