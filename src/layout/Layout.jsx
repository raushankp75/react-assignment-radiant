import React from 'react'
import { Header, Footer } from '../components'

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen w-full'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout