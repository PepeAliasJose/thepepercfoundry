import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>
          PepeRCFoundry - Desarrollador FullStack con +3 años de experiencia
        </title>
        <meta
          name='description'
          content='Programador Web y Multiplataforma Especializado en crear aplicaciones únicas.'
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen overflow-x-clip h-[100dvh]`}
      >
        {children}
      </body>
    </html>
  )
}
