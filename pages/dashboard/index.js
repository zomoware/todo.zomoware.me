import AppLayout from '../../components/applayout';

import Head from 'next/head';


export default function Dashboard() {
  return (
    <AppLayout>
      <Head>
        <title>zomoware / dashboard</title>
      </Head>


      <div className='layout flex-col h-60 w-full p-0'>
        <h1 className='font-bold'>home</h1>
        <h2 className='opacity-50'>tasks.nuber</h2>
      </div>
    </AppLayout>
  )
}
