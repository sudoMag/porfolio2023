import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/IndexsudoMag";
import Header from "@/components/Header/IndexsudoMag";
import About from "@/components/About/IndexsudoMag";
import Projects from "@/components/Projects/IndexsudoMag";
import Skills from "@/components/Skills/IndexsudoMag";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Head><title>Manuel Casanova Portfolio</title></Head>
      <main
        className={`bg-paletteDarkGray absolute
      flex w-full flex-col items-center
      justify-between ${inter.className}`}
      >
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Skills />
      </main>
    </>
  );
}
