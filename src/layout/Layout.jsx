import React from 'react'
import { Header, Footer } from '../components'

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen w-full'>
      <Header />
      <main className='md:px-60 px-6 md:py-5 py-2 bg-[#FBFCFD]'>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout