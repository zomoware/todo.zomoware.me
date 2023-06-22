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
            <div className='click'>
              <BadgeX className='fill-black/20 dark:fill-white/20'/>
              <p className='w-20'>Email</p>
            </div>
            <button className='click w-20'>Enable</button>
          </div>

          <div className='layout p-0'>
            <div className='click'>
              <BadgeCheck className='fill-black/20 dark:fill-white/20'/>
              <p className='w-20'>Web</p>
            </div>
            <button className='click w-20'>Disable</button>
          </div>

          <div className='layout p-0'>
            <div className='click'>
              <BadgeCheck className='fill-black/20 dark:fill-white/20'/>
              <p className='w-20'>App</p>
            </div>
            <button className='click w-20'>Disable</button>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
