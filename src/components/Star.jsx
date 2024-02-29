import React from 'react'
import { StarFull, StarEmpty, StarHalf } from '../assets'

const Star = ({ stars }) => {

    // console.log(stars)

    const ratingStars = Array.from({ length: 5 }, (item, index) => {
        let number = index + 0.5

        return (
            <span key={index}>
                {
                    stars >= index + 1 ? <img src={StarFull} alt="StarFull" /> : stars >= number ? <img src={StarHalf} alt={StarHalf} /> : <img src={StarEmpty} alt={StarEmpty} />
                }
            </span>
        )
    })




    return (
        <div>{ratingStars}</div>
    )
}

export default Star