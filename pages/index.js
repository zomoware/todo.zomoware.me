import Link from 'next/link';


export default function Home() {
  return (
    <main className="layout flex-col justify-evenly h-screen w-screen p-0">
      <div className='layout flex-col gap-0 p-0'>
        <h1>zomoware</h1>
        <h2 className='opacity-50'>task</h2>
      </div>

      <Link href={'/dashboard'} className='click'>Login</Link>
    </main>
  )
}
