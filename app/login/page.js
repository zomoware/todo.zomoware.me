import Head from 'next/head';
import Link  from 'next/link';


export default function Login() {
  return (
    <main className="layout h-screen w-screen p-0">
      <Head>
        <title>zomoware / dashboard / login</title>
      </Head>

      <div className='layout flex-col h-full w-1/2 p-0'>
        <form className='theme bg-transparent rounded-xl border-2 layout h-80 w-80 p-0'>
        </form>
        <Link href={'/signup'}>signup</Link>
      </div>

      <div className='layout flex-col h-full w-1/2 p-0'>
      </div>
    </main>
  )
}
