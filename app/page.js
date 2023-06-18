import Image from 'next/image';
import Link from 'next/link';


export default function Home() {
  return (
    <main className='layout flex-col justify-evenly min-h-screen w-full p-0'>
      <div className='layout flex-col w-full gap-0'>
        <h1>zomoware</h1>
        <h2>TODO</h2>
      </div>

      <Link href={'/'} className='click animate-bounce'>Login</Link>
    </main>
  )
}
