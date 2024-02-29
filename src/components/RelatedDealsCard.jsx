import React from 'react'
import Button from './Button'

const RelatedDealsCard = ({ image, name, description, oldPrice, newPrice, discount, deals }) => {
    return (
        <div className='flex flex-col justify-center gap-5 px-8 py-3 sm-shadow'>
            <div className='flex justify-center'>
                <img src={image} alt={image} className='w-fit' />
            </div>
            <div className='flex gap-3'>
                <p className='text-[#074786] bg-[#F2F4F7] h-fit px-2 py-1 rounded-[8px] text-[14px] leading-[20px]'>{discount}% Off</p>
                <p className='text-[#074786] bg-[#F2F4F7] h-fit px-2 py-1 rounded-[8px] text-[14px] leading-[20px]'>{deals}</p>
            </div>

            <div className='flex flex-col gap-2'>
                <h1 className='text-[16px] text-[#626E79] leading-[24px] font-[700] text-center'>{name}</h1>
                <p className='text-[16px] text-[#626E79] leading-[24px]'>{description}</p>

                <div className='flex gap-3'>
                    <p className='text-[20px] text-[#5C6874] leading-[28px]'>${newPrice}</p>

                    <div className='flex gap-3'>
                        <p className='text-[14px] text-[#9FA9B3] leading-[20px] self-end'>${newPrice}</p>
                        <p className='text-[13px] text-[#EF4C5D] leading-[20px] self-end'>({discount}% Off)</p>
                    </div>
                </div>
            </div>

            <Button>View Deal</Button>
        </div>
    )
}

export default RelatedDealsCard