'use client';


import Link from 'next/link';

import {useState} from 'react';

import {motion, AnimatePresence} from 'framer-motion';
import {Menu, Fingerprint, LayoutDashboard, Star, Clock, Settings, LogOut} from 'lucide-react';


export default function AppLayout({children}) {
  let [show, setShow] = useState(false);

  return (
    <main className='layout flex-col h-screen w-full gap-0 p-0'>
      <div className='theme border-b-2 h-20 w-full p-0'>
        <button onClick={() => setShow(show =! show)} className='click'><Menu/></button>
        <Link href={'/'} className='click'><Fingerprint/> Ilyas Husain</Link>
        <button className='click'><LogOut/></button>
      </div>

      <div className='layout flex-col h-full w-full gap-0 p-0'>
        <div className='layout h-full w-full'>
          <main className='layout flex-col h-full w-full md:w-6/12 gap-6 p-0'>
            {children}
          </main>
        </div>

        <AnimatePresence>
          {show &&
            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:20}} className='theme rounded-full border-2 h-20 w-fit m-4 gap-6 z-20 fixed bottom-0'>
              <Link href={'/dashboard'} className='click w-fit sm:w-20'><LayoutDashboard className='fill-black/20 dark:fill-white/20'/></Link>
              <Link href={'/dashboard/stared'} className='click w-fit sm:w-20'><Star className='fill-black/20 dark:fill-white/20'/></Link>
              <Link href={'/dashboard/clock'} className='click w-fit sm:w-20'><Clock className='fill-black/20 dark:fill-white/20'/></Link>
              <Link href={'/dashboard/settings'} className='click w-fit sm:w-20'><Settings className='fill-black/20 dark:fill-white/20'/></Link>
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </main>
  )
}