
import Head from 'next/head'
import Hero from './sections/Hero'
import Social from './sections/Social'
import Value from './sections/Value'
import CTA from './sections/CTA'
import Navbar from '../components/Navbar'

export default function Home() {

  return (
    <>
      <Head>
        <title>0xFethr</title>
        <meta name="description" content="Latest news delivered with Authenticity" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex flex-col justify-center items-center'>
        <Navbar />
        <Hero/>
        <Social/>
        <Value />
        <CTA />
      </main>
    </>
  )
}
