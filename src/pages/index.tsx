import Head from "next/head";
import { Inter } from "next/font/google";
import Homescreen from "../../components/Homescreen";
import Header from "../../components/Header";
import About from "../../components/About";
import Jobs from "../../components/Jobs";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Construction from "../../components/Construction";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Uprint - Pistas de dança personalizadas</title>
        <meta name="description" content="Transforming dreams into print." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        {/* navigation */}
        <Header />
        <Construction />
        {/* screens */}
        {/* <Homescreen />
        <About />
        <Jobs />
        <Contact /> */}
        {/* <Footer /> */}
      </main>
    </>
  );
}
