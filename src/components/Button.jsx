import React from 'react'

const Button = ({ children }) => {
    return (
        <button className='bg-[#1B88F4] text-[#FFFFFF] w-[232px] h-[48px] px-3 py-2 outline-none border-none rounded-[12px] text-[16px] leading-[24px] font-[400] mb-5 cursor-pointer'>{children}</button>
    )
}

export default Button