import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Meditation } from "@/public/meditation-header";

const inter = Inter({ subsets: ["latin"] });

export default function GuiaAnsiedade() {
  return (
    <>
      <Head>
        <title>Da Desordem à Calma - Como tratar a ansiedade</title>
        <meta
          name="description"
          content="Guia Prático de Estratégias Para Uma Vida Calma, Confiante e Equilibrada"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <section className="w-full bg-slate-50 lg:min-h-screen pb-0 pt-12 md:pt: md:pb-20">
          <div className="flex md:flex-row flex-col max-w-6xl  mx-auto">
            <div className="flex flex-col justify-center items-center sm:items-start mx-auto">
              <h1 className="sm:text-5xl text-3xl text-center sm:text-left mb-4 font-extrabold max-w-[395px] tracking-wide">
                DA DESORDEM À <span className="text-indigo-500">CALMA</span>:
              </h1>

              <p className="text-base sm:text-2xl text-center sm:text-left mb-8 font-bold max-w-[400px]">
                Guia <span className="text-amber-700">Prático</span> de
                Estratégias Para Uma Vida Calma, Confiante e Equilibrada{" "}
              </p>

              <a
                href="/"
                className="px-4 py-2 bg-indigo-700 z-20 max-w-fit rounded-xl"
              >
                <span className="text-neutral-50 text-sm sm:text-base font-semibold">
                  Saiba mais sobre o ebook
                </span>
              </a>
            </div>
            <div className="-mt-40 -ml-8 w-[400px] sm:mt-0 sm:ml-0 sm:w-full lg:-mr-32 lg:w-[900px] -z-0 flex items-center justify-center">
              <Meditation />
            </div>
          </div>
        </section>

        <section className="w-full py-8 sm:py-14 bg-indigo-600">
          <div className="max-w-6xl mx-auto">
            <h2 className="sm:text-3xl text-base text-center max-w-5xl mx-auto font-bold text-neutral-50">
              Você <span className="underline">não</span> está sozinho na luta
              contra a ansiedade. Descubra as estratégias que{" "}
              <span className="text-amber-500">REALMENTE</span> funcionam
            </h2>
          </div>
        </section>
      </main>
    </>
  );
}
