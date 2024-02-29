import React from 'react'
import { content } from '../contents/Content'

const BreadCrumbs = () => {

    const { heading } = content;


    return (
        <ul className='flex md:gap-3 gap-1 p-2 overflow-x-scroll scrollbar-none' >
            {
                heading.breadCrumbs.map((item, index) => (
                    <div key={index} className='flex md:gap-4 gap-3 items-center'>
                        <a href={item.links} key={item.name}><li className='list-none text-[#727D87] text-[13px]'>{item.name}</li></a>
                        <span className='text-lg'>{index !== heading.breadCrumbs.length - 1 ? '>' : null}</span>
                    </div>
                ))
            }
        </ul>
    )
}

export default BreadCrumbs