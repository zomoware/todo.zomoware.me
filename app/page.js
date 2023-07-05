import Head from 'next/head';
import Link from 'next/link';


export default function Home() {
  return (
    <main className="layout flex-col justify-evenly h-screen w-screen p-0">
      <Head>
        <title>zomoware</title>
      </Head>


      <div className='layout flex-col gap-0 p-0'>
        <h1>zomoware</h1>
        <h2 className='opacity-50'>be productive.</h2>
      </div>


      <div className='layout p-0'>
        <Link href={'/dashboard'} className='click'>Log In</Link>
        <Link href={'/dashboard'} className='click'>Sign Up</Link>
      </div>
    </main>
  )
}
