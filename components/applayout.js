'use client';


import Image from 'next/image';
import Link from 'next/link';


import {motion, AnimatePresence} from 'framer-motion';
import {Fingerprint, Menu, Inbox, Star, Plus} from 'lucide-react';

import {useState} from 'react';


export default function AppLayout({children}) {
  let [showSideBar, setShowSideBar] = useState(false);


  return (
    <main className='layout flex-col h-screen w-full gap-0 p-0'>
      <div className='theme border-b-2 h-20 w-full gap-0 p-0'>
        <div className='theme border-r-2 h-full w-80'>
          <button className='click'><Fingerprint/> Ilyas</button>
          <button onClick={() =>setShowSideBar(showSideBar =! showSideBar)} className='click'><Menu/></button>
        </div>
        <div className='layout h-full w-full'></div>
      </div>

      <div className='layout h-full w-full gap-0 p-0'>
        <AnimatePresence>
          {showSideBar &&
            <motion.div className='theme flex-col md:border-t-0 md:border-r-2 md:h-full md:w-80 md:static border-t-2 h-2/6 w-full fixed bottom-0'>
              <Link href={'/dashboard'} className='click max-w-sm w-full'><Inbox/> Inbox</Link>
              <Link href={'/dashboard/stared'} className='click max-w-sm w-full'><Star/> Stared</Link>
              <button onClick={() => console.log('...')} className='click max-w-sm w-full'><Plus/> New</button>
            </motion.div>
          }
        </AnimatePresence>
        <div className='layout h-full w-full'>
          {children}
        </div>
      </div>
    </main>
  )
}