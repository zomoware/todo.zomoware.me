import Head from 'next/head';

import Image from 'next/image';
import Link  from 'next/link';


export default function Login() {
  return (
    <main className="layout h-screen w-screen p-0">
      <Head>
        <title>zomoware / dashboard / login</title>
      </Head>

      <div className='layout flex-col h-full w-full p-0'>
        <form className='theme bg-transparent rounded-xl border-2 layout flex-col justify-evenly h-3/6 w-80'>
          <h2 className='font-bold'>login</h2>
          <div className='layout flex-col gap-0 p-0'>
            <input id='email' type='email' placeholder='email' className='click mb-3'/>
            <input id='password' type='password' placeholder='password' className='click'/>
          </div>

          <button className='click'>login</button>
        </form>

        <div className='layout p-0'>
          <Link href={'/signup'}>signup</Link>

          <span className='bg-black dark:bg-white rounded-full layout h-2 w-2 p-0'/>

          <Link href={'https://zomoware.cloud/community'}>community</Link>
          <Link href={'https://zomoware.cloud/privacy'}>privacy</Link>
          <Link href={'https://zomoware.cloud/terms'}>terms</Link>
        </div>
      </div>
    </main>
  )
}
