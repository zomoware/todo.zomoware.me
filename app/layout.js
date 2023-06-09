import './globals.css';


export const metadata = {
  title: 'zomoware',
  description: 'fresh apps',
}

export default function RootLayout({children}) {
  return (
    <html lang='en'>
      <body className='layout min-h-screen w-full gap-8 p-0'>
        {children}
      </body>
    </html>
  )
}