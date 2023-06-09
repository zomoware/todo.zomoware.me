'use client';


import Link from 'next/link';

import {useState} from 'react';

import {motion, AnimatePresence} from 'framer-motion';
import {X, LogOut} from 'lucide-react';


export default function NavBar() {
  let [showDrawer, setShowDrawer] = useState(false);

  return (
    <main className='h-20'>
      <div className='theme-outside border-b-2 layout justify-around h-20 w-full fixed top-0 inset-x-0 z-20'>
        <a href='/dashboard'>
          <h1 className='text-base'>ZOMOWARE</h1>
          <h2 className='text-base'>TODO</h2>
        </a>

        <button onClick={() => setShowDrawer(showDrawer =! showDrawer)}><img src='./brand.png' alt='user profile' className='rounded-full h-10 w-10'/></button>
      </div>

      <AnimatePresence>
        {showDrawer &&
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className='dark:bg-black/50 bg-white/50 layout h-full w-full fixed inset-0 z-10'>
            <motion.div initial={{scale:0.9}} animate={{scale:1}} exit={{scale:0.9}} className='theme-outside rounded-xl border-2 layout flex-col h-fit w-full max-w-xl'>
              <div className='layout h-20 w-full p-0'>
                <div className='layout justify-start w-full p-0'>
                  <img src='./brand.png' alt='zomoware brand' className='rounded-full h-10 w-10'/>
                  <p>Ilyas Husain</p>
                </div>
                <div className='layout p-0'>
                  <button className='text-click'><LogOut/></button>
                  <button onClick={() => setShowDrawer(showDrawer =! showDrawer)} className='text-click'><X/></button>
                </div>
              </div>
                <div className='layout h-full w-full p-0'>
              </div>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    </main>
  )
}
