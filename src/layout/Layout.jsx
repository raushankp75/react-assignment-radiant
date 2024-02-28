import React from 'react'
import { Header, Footer } from '../components'

const Layout = ({ children }) => {
  return (
    <div className='bg-blue-300 min-h-screen w-full'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout