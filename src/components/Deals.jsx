import React from 'react'

const Deals = ({ dealsImage, children }) => {
    return (
        <button className='bg-[#FF7724] rounded-tr-[8px] rounded-br-[8px] px-2 py-2 w-[136px] h-[34px] border-none outline-none text-[16px] text-[#FFFFFF] absolute -top-4 -left-3 flex items-center gap-2'>
            <img src={dealsImage} alt={dealsImage} /> {children}
        </button>
    )
}

export default Deals