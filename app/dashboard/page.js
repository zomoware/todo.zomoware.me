import NavBar from '../../components/navbar';

import {Plus} from 'lucide-react';


export default function Dashboard() {
  return (
    <main className='layout flex-col w-full max-w-xl p-0'>
      <NavBar/>

      <div className=''>
      </div>

      <div className='layout w-full fixed bottom-0'>
        <input className='click w-full max-w-xl' placeholder='Add New'/>
        <button className='click'><Plus/></button>
      </div>
    </main>
  )
}