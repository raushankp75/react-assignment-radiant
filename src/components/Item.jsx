import React from 'react'

const Item = ({ links, title }) => {
    return (
        <ul className='flex flex-col'>
            <h1 className='text-[16px] text-[#FFFFFF] font-[400]'>{title}</h1>

            {
                links.map((link) => (
                    <li key={link.name} className='list-none'>
                        <p className='text-[#B6BDC4] text-[13px] hover:text-teal-400 duration-300 text-sm cursor-pointer leading-9'>{link.name}</p>
                    </li>
                ))
            }
        </ul>
    )
}

export default Item