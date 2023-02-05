import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { Meditation } from "@/public/meditation-header";
import { Sad } from "@/public/sad-person";
import { Cadeado } from "@/public/cadeado";
import { Kiwify } from "@/public/kiwify-logo";
import { Star } from "@/public/start";
import { Enjoy } from "@/public/enjoy-ride";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
        <section className="w-full py-2 sm:py-4 bg-gray-800 px-4">
          <div className="max-w-6xl mx-auto">
            <div className=" flex items-center justify-center hover:brightness-150 transition-all cursor-pointer max-w-fit hover:scale-105 mx-auto">
              <Image
                src="/Logo.svg"
                alt="Life Balance Logo"
                width={100}
                height={24}
                priority
              />
            </div>
          </div>
        </section>

        <section className="w-full bg-slate-50 pb-0 pt-12 md:pt-0 md:pb-20">
          <div className="flex md:flex-row flex-col max-w-6xl  mx-auto">
            <div className="flex flex-col justify-center items-center sm:items-start mx-auto">
              <h1 className="sm:text-5xl text-3xl text-center sm:text-left mb-4 font-extrabold max-w-[395px] tracking-wide">
                DA DESORDEM À <span className="text-indigo-500">CALMA</span>:
              </h1>

              <p className="text-base sm:text-2xl text-center sm:text-left mb-8 font-bold max-w-[400px] px-4 sm:px-0">
                Guia <span className="text-amber-700">Prático</span> de
                Estratégias Para Uma Vida Calma, Confiante e Equilibrada{" "}
              </p>

              <a
                href="#conteudo"
                className="px-6 py-3 bg-indigo-900 z-20 max-w-fit rounded-xl hover:brightness-125 transition-all"
              >
                <span className="text-neutral-50 text-sm sm:text-base font-semibold">
                  Quero saber mais
                </span>
              </a>
            </div>
            <div className="-mt-40 -ml-8 w-[400px] sm:mt-0 sm:ml-0 sm:w-full lg:-mr-32 lg:w-[900px] -z-0 flex items-center justify-center">
              <Meditation />
            </div>
          </div>
        </section>

        <section className="w-full py-8 sm:py-14 bg-indigo-600 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="sm:text-3xl text-base text-center max-w-5xl mx-auto font-bold text-neutral-50">
              Você <span className="underline">não</span> está sozinho na luta
              contra a ansiedade. Descubra as estratégias que{" "}
              <span className="text-amber-500">REALMENTE</span> funcionam.
            </h2>
          </div>
        </section>

        <section
          id="conteudo"
          className="w-full bg-slate-50 pt-12 pb-0 sm:py-12 px-4"
        >
          <div className="flex md:flex-row flex-col max-w-6xl  mx-auto">
            <div className="flex flex-col justify-center items-center sm:items-start mx-auto">
              <h2 className="sm:text-4xl text-2xl text-slate-800 text-center sm:text-left mb-4 font-extrabold max-w-[600px]">
                Não deixe a ansiedade controlar sua vida e afetar sua saúde
                física e mental.
              </h2>

              <p className="text-sm sm:text-base text-center sm:text-left mb-2 font-bold max-w-[600px] px-4 sm:px-0">
                A ansiedade pode ter graves impactos em sua saúde física e
                mental.
              </p>

              <p className="text-sm sm:text-base text-center sm:text-left mb-8 font-bold max-w-[600px] px-4 sm:px-0">
                Ela pode levar a problemas como insônia, dores de cabeça,
                pressão alta e até mesmo aumentar o risco de doenças cardíacas.
              </p>

              <a
                href="#checkout"
                className="px-6 py-3 bg-indigo-900 z-20 max-w-fit rounded-xl hover:brightness-125 transition-all"
              >
                <span className="text-neutral-50 text-sm sm:text-base font-semibold">
                  Quero combater minha ansiedade
                </span>
              </a>
            </div>
            <div className="-mt-40 w-[300px] sm:mt-0 sm:ml-0 sm:w-full lg:w-[500px] -z-0 flex items-center justify-center">
              <Sad />
            </div>
          </div>
        </section>

        <section className="w-full overflow-hidden bg-violet-50 lg:min-h-screen py-12 lg:py-20 relative px-4">
          <h2 className="sm:text-4xl mx-auto text-3xl text-center text-slate-800  mb-8 font-bold max-w-5xl">
            O que você vai aprender com nosso conteúdo prático e ilustrado:
          </h2>
          <h3 className="text-amber-700 text-base font-bold text-center mb-4">
            Preview do conteúdo: Desliza pro lado e navegue por algumas páginas
            do eBook :)
          </h3>

          <div className="flex md:flex-row flex-col max-w-6xl mx-auto md:justify-center">
            <div className="flex flex-col">
              <div className="max-w-[400px]  z-50 mr-12 flex-col mt-8 hidden lg:flex">
                <p className="text-base font-bold mb-4 text-slate-600">
                  ☯ Desvende o segredo para a identificar o gatilho do seu
                  estresse e combate-o de forma eficaz;{" "}
                </p>
                <p className="text-base font-bold mb-4 text-slate-600">
                  ☯ Descubra o que realmente está causando estresse e desordem
                  em sua vida e aprenda a lidar com isso;
                </p>
                <p className="text-base font-bold mb-4 text-slate-600">
                  ☯ Aprenda a aplicar a técnica de Mindfulness na sua rotina
                  diária para manter a calma e a claridade mental;
                </p>
                <p className="text-base font-bold mb-4 text-slate-600">
                  ☯ Organize sua mente e reduza o estresse através de técnicas
                  simples e eficazes de organização mental;
                </p>
                <p className="text-base font-bold mb-4 text-slate-600">
                  ☯ Descubra como lidar com as coisas além do seu controle e
                  mantenha-se calmo e confiante em todas as situações;
                </p>
                <p className="text-base font-bold mb-4 text-slate-600">
                  ☯ Siga um plano diário prático e eficaz para manter a calma e
                  a confiança, mesmo nos dias mais agitados.
                </p>
              </div>
            </div>
            <div className="lg:max-w-[500px] flex items-center z-20">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
              >
                <SwiperSlide>
                  <div className="mx-auto flex justify-center mb-12 w-[200px] lg:w-[350px]">
                    <Image
                      src="/imagem-capa.png"
                      alt="Capa do ebook"
                      width={350}
                      height={450}
                      priority
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="mx-auto  flex justify-center mb-12 w-[200px] lg:w-[350px]">
                    <Image
                      src="/indice-1.png"
                      alt="Capa do ebook"
                      width={350}
                      height={450}
                      priority
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="mx-auto flex justify-center mb-12 w-[200px] lg:w-[350px]">
                    <Image
                      src="/indice-2.png"
                      alt="Capa do ebook"
                      width={350}
                      height={450}
                      priority
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="mx-auto flex justify-center mb-12 w-[200px] lg:w-[350px]">
                    <Image
                      src="/imagem-cap-1.png"
                      alt="Capa do ebook"
                      width={350}
                      height={450}
                      priority
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="mx-auto flex justify-center mb-12 w-[200px] lg:w-[350px]">
                    <Image
                      src="/imagem-cap-2.png"
                      alt="Capa do ebook"
                      width={350}
                      height={450}
                      priority
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="mx-auto h-full flex-col flex justify-center pt-32 sm:pt-56 items-center mb-12 w-[200px] lg:w-[350px]">
                    <span className="text-xs mb-4">
                      Pré-visualização encerrada.
                    </span>
                    <a
                      href="#checkout"
                      className="px-4 py-2 bg-indigo-900 hover:brightness-125 transition-all z-20 max-w-fit rounded-xl"
                    >
                      <span className="text-neutral-50 text-sm font-semibold">
                        Baixe o ebook completo
                      </span>
                    </a>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="absolute z-10 top-32 opacity-10 sm:opacity-50 sm:scale-150 -left-40">
            <Enjoy />
          </div>
        </section>

        <section
          id="checkout"
          className="w-full py-8 sm:py-14 bg-slate-50 px-4"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="sm:text-4xl text-lg text-center max-w-5xl mx-auto font-bold text-slate-700 mb-6">
              Não perca mais tempo se sentindo ansioso e estressado. Adquira
              agora nosso ebook e{" "}
              <span className="text-amber-500">comece a mudar sua vida.</span>
            </h2>

            <p className="text-sm sm:text-base text-center max-w-4xl mx-auto font-bold text-slate-500 mb-4">
              Com as técnicas e estratégias apresentadas em nosso livro, você
              poderá{" "}
              <span className="text-indigo-500">superar a ansiedade</span> e
              viver dias mais tranquilos e saudáveis.
            </p>

            <p className="text-sm sm:text-base text-center max-w-4xl mx-auto font-bold text-slate-500">
              O valor é incrivelmente acessível, considerando os resultados
              surpreendentes que você obterá.
            </p>

            <div className="flex flex-col sm:flex-row w-full justify-center gap-x-4 items-center mt-8">
              <div className="flex flex-col hover:-translate-y-1 transition-all">
                <Image
                  src="/capa-livro-mini.png"
                  alt="Capa do ebook"
                  width={190}
                  height={248}
                  priority
                />
                <div className="flex gap-x-1 mx-auto">
                  <div className="w-4 flex items-center justify-center">
                    <Star />
                  </div>
                  <div className="w-4 flex items-center justify-center">
                    <Star />
                  </div>
                  <div className="w-4 flex items-center justify-center">
                    <Star />
                  </div>
                  <div className="w-4 flex items-center justify-center">
                    <Star />
                  </div>
                  <div className="w-4 flex items-center justify-center">
                    <Star />
                  </div>
                </div>
              </div>

              <div className="flex flex-col font-bold text-sm text-slate-500">
                <p>Edição: Português</p>
                <p>N. de páginas: 51</p>
                <p>Ilustrado</p>
                <p className="mb-4">Copyright: Life Balance™</p>
                <p className="text-base text-slate-600">
                  de: <span className="line-through">R$ 49,90</span>
                </p>
                <p className="text-2xl text-slate-700 mb-4">por: R$ 29,90</p>
                <a
                  href="https://pay.kiwify.com.br/s6fO8Ia"
                  className="px-4 py-2 bg-indigo-900 z-20 max-w-fit rounded-xl hover:brightness-150 transition-all"
                >
                  <span className="text-neutral-50 text-sm  font-semibold">
                    Comprar agora
                  </span>
                </a>
              </div>
            </div>

            <div className="mx-auto flex flex-col sm:flex-row sm:items-center gap-x-4 justify-center mt-20">
              <div className="flex flex-col items-center mb-4 sm:mb-0">
                <div className="bg-amber-400 hover:brightness-105 cursor-default transition-all px-4 py-0 rounded-lg flex items-center gap-x-2">
                  <div className="flex items-center justify-center w-6">
                    <Cadeado />
                  </div>
                  <span className="text-sm text-amber-900 font-bold">
                    Compra segura
                  </span>
                </div>
              </div>

              <div className="flex flex-col mx-auto sm:mx-0">
                <span className="text-xs sm:ml-4">
                  Checkout seguro pela plataforma
                </span>
                <div className="flex items-center justify-center w-40">
                  <Kiwify />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-8 sm:py-14 bg-slate-900 px-4">
          <div className="max-w-6xl mx-auto">
            <div className=" flex items-center justify-center">
              <Image
                src="/Logo.svg"
                alt="Life Balance Logo"
                width={100}
                height={24}
                priority
              />
            </div>
            <h2 className="text-xs sm:text-base text-center max-w-5xl mx-auto font-bold text-neutral-400">
              Copyright Life Balance © 2022-2023. Todos os direitos reservados.
            </h2>
          </div>
        </section>
      </main>
    </>
  );
}
