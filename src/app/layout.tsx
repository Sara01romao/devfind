'use client'
import { Header } from './_component/heander';
import './globals.css';
import { useState } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState(false)
  return (
    <html lang="en" data-theme={!theme ? "dark":""}>
      <body>
        <div className="bg-white dark:bg-black">
          <Header setTheme={setTheme} isDark={theme} />
          {children}
        </div>
      </body>
    </html>
  )
}