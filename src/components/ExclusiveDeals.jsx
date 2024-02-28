import React from 'react'

const ExclusiveDeals = () => {
    return (
        <div className='md:flex justify-center items-center gap-44 md:px-12 px-4 bg-[#FFFFFF] py-7'>
            <h1 className='md:text-[32px] md:mb-0 mb-6 md:leading-normal font-[400] text-[#5C6874] flex-wrap md:w-[30%] w-full'>Sign up and get exclusive special deals</h1>

            <div className='md:w-[348px] w-full h-[52px] rounded-md border flex items-center md:justify-center'>
                <input type="search" className='bg-transparent border outline-none text-base px-2 py-[7px] rounded-tl-[12px] rounded-bl-[12px]' />
                <button className='rounded-tr-[12px] rounded-br-[12px] px-4 py-3 bg-[#1B88F4] text-[14px] text-[#FFFFFF] border-none outline-none'>Sign Up</button>
            </div>
        </div>
    )
}

export default ExclusiveDeals