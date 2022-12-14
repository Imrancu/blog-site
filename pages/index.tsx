import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Medium clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className='flex justify-between items-center bg-blue-100 p-7'>
        <div className='px-10 space-y-5'>
          <h1 className="text-6xl max-w-xl font-serif"><span className="underline decoration-black decoration-4">Medium</span> is a place to write, read, and connect.</h1>
          <h2>It's easy and free to post your thinking on any topic and connect with millions of readers!</h2>
        </div>
        <img className='hidden md:inline-flex pr-10 h-32 lg:h-full' src="https://i.ibb.co/YcD8zhX/mlogo.png" alt="" />
      </div>
    </div>
  )
}

export default Home
