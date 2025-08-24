'use client'
import { Header } from './_component/heander';
import './globals.css';
import { useState } from 'react';

import { Space_Mono } from 'next/font/google'
 
const space_mono = Space_Mono({
  subsets: ['latin'],
  weight:['400', '700']
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState(false)
  return (
    <html lang="en" data-theme={theme ? "light":"dark"} className={space_mono.className}>
      <body className="bg-[#F6F8FF] dark:bg-[#141D2F]">
        <Header setTheme={setTheme} isDark={theme} />
        {children}
      </body>
    </html>
  )
}