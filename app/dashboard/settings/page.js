import Image from 'next/image';
import Link from 'next/link';

import AppLayout from '../../../components/applayout';

import {ExternalLink, BadgeCheck, BadgeX} from 'lucide-react';


export default function Settings() {
  return (
    <AppLayout>
      <h1 className=''>settings</h1>
      <div className='layout flex-col h-full w-full gap-6 p-0'>
      <div className='layout flex-col'>
          <h2 className='opacity-100'>you account</h2>

          <Link href={'https://my.zomoware.cloud'} className='click w-60'>my.zomoware.cloud <ExternalLink/></Link>
        </div>

        <div className='layout flex-col'>
          <h2 className='opacity-100'>notifications</h2>

          <div className='layout p-0'>
            <p className='click w-60'><BadgeX className='fill-black/20 dark:fill-white/20'/> Email Notifications</p>
            <button className='click w-20'>Enable</button>
          </div>

          <div className='layout p-0'>
            <p className='click w-60'><BadgeCheck className='fill-black/20 dark:fill-white/20'/> App Notifications</p>
            <button className='click w-20'>Disable</button>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
