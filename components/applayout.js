'use client';


import Link from 'next/link';

import {useState} from 'react';

import {motion, AnimatePresence} from 'framer-motion';
import {Fingerprint, Home, Lock, LogOut, LayoutGrid, Settings, Search, Plus} from 'lucide-react';


export default function AppLayout({children}) {
  const [showUserMenu, setShowUserMenu] = useState();

  return (
    <main className='layout flex-col min-h-screen w-full gap-0 p-0'>
      <div className='theme bg-white dark:bg-black border-b-2 layout h-20 w-full fixed top-0 inset-0'>
        <button className='click justify-evenly'><Plus/></button>

        <button onClick={() => setShowUserMenu(!showUserMenu)} className='click justify-evenly'><Fingerprint/></button>


        <AnimatePresence>
          {showUserMenu &&
            <motion.div initial={{opacity:0, scale:0.9, y:-20}} animate={{opacity:1, scale:1, y:0}} exit={{opacity:0, scale:0.9, y:-20}} className='layout fixed top-20 right-0'>
              <div className='theme bg-white dark:bg-black border-2 rounded-xl layout flex-col'>
                <div>
                  <p className='font-bold'>user.name</p>
                </div>


                <Link href={'/dashboard'} className='click justify-evenly w-40'>
                  <Home className='fill-black/30 dark:fill-white/30 w-10'/>
                  <p className='w-full'>Home</p>
                </Link>

                <Link href={'/dashboard/sections'} className='click justify-evenly w-40'>
                  <LayoutGrid className='fill-black/30 dark:fill-white/30 w-10'/>
                  <p className='w-full'>Sections</p>
                </Link>

                <Link href={'/dashboard/search'}  className='click justify-evenly w-40'>
                  <Search className='fill-black/30 dark:fill-white/30 w-10'/>
                  <p className='w-full'>Search</p>
                </Link>


                <Link href={'/dashboard/settings'} className='click justify-evenly w-40'>
                 <Settings className='fill-black/30 dark:fill-white/30 w-10'/>
                  <p className='w-full'>Settings</p>
                </Link>

                <button className='click justify-evenly w-40'>
                  <Lock className='fill-black/30 dark:fill-white/30 w-10'/>
                  <p className='w-full'>App Lock</p>
                </button>

                <button className='click justify-evenly w-40'>
                  <LogOut className='fill-black/30 dark:fill-white/30 w-10'/>
                  <p className='w-full'>LogOut</p>
                </button>
              </div>
            </motion.div>
          }
        </AnimatePresence>
      </div>


      <motion.div initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}} className='layout flex-col min-h-screen w-full p-0'>
        {children}
      </motion.div>
    </main>
  )
}