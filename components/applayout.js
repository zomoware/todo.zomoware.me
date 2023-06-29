'use client';


import Link from 'next/link';

import {motion} from 'framer-motion';
import {Fingerprint, Menu, Grip, LayoutDashboard, Settings, Search, Plus} from 'lucide-react';


export default function AppLayout({children}) {
  return (
    <main className='layout flex-col h-screen w-screen gap-0 p-0'>
      <div className="bg-stone-100 border-stone-200 dark:bg-stone-900 dark:border-stone-800 border-b-2 layout h-20 w-full fixed top-0 inset-x-0">
        <button className='click'><Fingerprint/> user.name</button>
        <button className='click'><Menu/></button>
        <button className='click'><Grip/></button>
      </div>


      <div className="layout h-full w-full">{children}</div>


      <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:20}} className="layout h-20 w-full fixed bottom-0">
        <Link href={'/dashboard'} className='click'><LayoutDashboard className='fill-black/30 dark:fill-white/30'/></Link>
        <Link href={'/dashboard/settings'} className='click'><Settings className='fill-black/30 dark:fill-white/30'/></Link>
        <Link href={'/dashboard/search'}  className='click'><Search className='fill-black/30 dark:fill-white/30'/></Link>

        <button className='click'><Plus/></button>
      </motion.div>
    </main>
  )
}