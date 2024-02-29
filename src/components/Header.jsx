import React from 'react'
import SearchBox from './SearchBox'
import Nav from './Nav'

const Header = () => {
  return (
    <header className='bg-[#212731] sticky top-0 flex-wrap z-[20] mx-auto flex items-center md:justify-center justify-between md:gap-16 gap-4 min-h-[64px] w-full md:px-0 px-5'>
      <SearchBox />
      <Nav />
    </header>
  )
}

export default Header