import AppLayout from '../../../components/applayout';

import {PlusCircle} from 'lucide-react';


export default function Stared() {
  return (
    <AppLayout>
      <h1 className=''>stared</h1>
      <div className='layout h-full w-full p-0'></div>
      <button className='click w-64'><PlusCircle className='fill-black/20 dark:fill-white/20'/></button>
    </AppLayout>
  )
}
