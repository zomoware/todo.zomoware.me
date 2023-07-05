import AppLayout from '../../../components/applayout';

import Head from 'next/head';


export default function Sections() {
  return (
    <AppLayout>
      <Head>
        <title>zomoware / dashboard / sections</title>
      </Head>


      <div className='layout flex-col h-60 w-full p-0'>
        <h1 className='font-bold'>sections</h1>
        <h2 className='opacity-50'>sections.number</h2>
      </div>
    </AppLayout>
  )
}
