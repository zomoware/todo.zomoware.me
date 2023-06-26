'use client';


import Link from 'next/link';

import {motion} from 'framer-motion';
import {Fingerprint, Menu, Grip, LayoutDashboard, Settings, Search, Plus} from 'lucide-react';


export default function AppLayout({children}) {
  return (
    <main className='layout flex-col h-screen w-screen gap-0 p-0'>
      <div className="bg-green-500 text-white layout h-20 w-full">
        <button className='click bg-green-400'><Fingerprint/> user.name</button>
        <button className='click bg-green-400'><Menu/></button>
        <button className='click bg-green-400'><Grip/></button>
      </div>


      <div className="layout h-full w-full">{children}</div>


      <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:20}} className="layout h-20 w-full fixed bottom-0">
        <Link href={'/dashboard'} className='click'><LayoutDashboard className='fill-white/30'/></Link>
        <Link href={'/dashboard/settings'} className='click'><Settings className='fill-white/30'/></Link>
        <Link href={'/dashboard/search'}  className='click'><Search className='fill-white/30'/></Link>

        <button className='click'><Plus/></button>
      </motion.div>
    </main>
  )
}