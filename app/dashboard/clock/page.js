'use client';


import AppLayout from '../../../components/applayout';

import {motion} from 'framer-motion';
import {PlusCircle} from 'lucide-react';


export default function Clock() {
  return (
    <AppLayout>
      <h1 className=''>clock</h1>
      <div className='layout h-full w-full p-0'>
      </div>
      <motion.button initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className='click w-64'><PlusCircle className='fill-black/20 dark:fill-white/20'/></motion.button>
    </AppLayout>
  )
}
