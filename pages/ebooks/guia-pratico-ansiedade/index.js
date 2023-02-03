import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function GuiaAnsiedade() {
  return (
    <>
      <Head>
        <title>Da Desordem à Calma - Como tratar a ansiedade</title>
        <meta name="description" content="Guia Prático de Estratégias Para Uma Vida Calma, Confiante e Equilibrada" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-slate-50 min-h-screen py-20 w-full'>
        <section className=' w-full '>
            <div className='max-w-7xl mx-auto flex flex-col justify-center h-full'>
                <h1 className='text-3xl mb-4'>DA DESORDEM À CALMA:</h1>

                <p className='text-lg mb-8'>Guia Prático de Estratégias Para Uma Vida Calma, Confiante e Equilibrada </p>

                <a href='/'>
                    <div className='px-4 py-2 bg-blue-800 max-w-fit rounded-xl'>
                        <span className='text-neutral-50 font-semibold'>Saiba mais sobre o ebook</span>
                    </div>
                </a>

            </div>
        </section>
      </main>
    </>
  )
}
