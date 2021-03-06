import React from 'react'

export const Item = ({
    id,
    title,
    image,
    pricePerServing,
    readyInMinutes,
    healthScore,
    remove
}) => {
    return (
        <>
            <tr>
                <td>{title}</td>
                <td><img src={image} width={100} alt={title}/></td>
                <td>${pricePerServing}</td>
                <td>{readyInMinutes} minutes</td>
                <td><button className='btn btn-info' onClick={()=>remove(id, pricePerServing, readyInMinutes, healthScore)}>remove</button></td>
            </tr>
        </>
    )
}