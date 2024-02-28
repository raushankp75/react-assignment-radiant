import React from 'react'
import { SearchIcon } from '../assets'

const SearchBox = () => {
    return (
        <div className='w-[258px] h-[37px] rounded-md border border-[#E1E4E6] bg-[#FFFFFF] flex justify-start items-center gap-2 p-2'>
            <img src={SearchIcon} alt="" />
            <input type="search" placeholder='Search here...' className='bg-transparent border-none outline-none text-base' />
        </div>
    )
}

export default SearchBox