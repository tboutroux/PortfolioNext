import Head from 'next/head';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mon Portfolio | Théo Boutroux',
  description: 'Mon portfolio personnel ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <Head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </Head>
      <body className="font-poppins m-0 p-0 box-border w-screen bg-white ">{children}</body>
    </html>
  )
}
