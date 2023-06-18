'use client';


import Link from 'next/link';


import {Fingerprint, LayoutDashboard, Star, Clock, Settings} from 'lucide-react';


export default function AppLayout({children}) {
  return (
    <main className='layout flex-col-reverse h-screen w-full gap-0 p-0'>
      <div className='theme border-t-2 h-20 w-full gap-6 z-20'>
        <Link href={'/dashboard'} className='click'><LayoutDashboard className='fill-black/20 dark:fill-white/20'/></Link>
        <Link href={'/dashboard/stared'} className='click'><Star className='fill-black/20 dark:fill-white/20'/></Link>
        <Link href={'/dashboard/clock'} className='click'><Clock className='fill-black/20 dark:fill-white/20'/></Link>
        <Link href={'/dashboard/settings'} className='click'><Settings className='fill-black/20 dark:fill-white/20'/></Link>
      </div>

      <div className='layout h-full w-full'>
        <main className='layout flex-col h-full w-9/12 md:w-7/12 gap-0 p-0'>
          {children}
        </main>
      </div>

      <div className='theme border-b-2 h-20 w-full'>
        <Link href={'/dashboard/settings'} className='click'><Fingerprint/> Ilyas Husain</Link>
      </div>
    </main>
  )
}