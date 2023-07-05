import AppLayout from '../../../components/applayout';

import Head from 'next/head';


export default function Settings() {
  return (
    <AppLayout>
      <Head>
        <title>zomoware / dashboard / settings</title>
      </Head>


      <div className='layout flex-col h-60 w-full p-0'>
        <h1 className='font-bold'>settings</h1>
      </div>
    </AppLayout>
  )
}
