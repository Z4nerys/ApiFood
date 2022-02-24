import React from 'react'

export const Item = ({
    id,
    title,
    image,
    pricePerServing,
    readyInMinutes,
    remove
}) => {
    return (
        <>
            <tr >
                
                <td scope="row">{title}</td>
                <td><img src={image} width={100} alt={title}/></td>
                <td>${pricePerServing}</td>
                <td>{readyInMinutes} minutes</td>
                <td><button className='btn btn-info' onClick={()=>remove(id)}>remove</button></td>
            </tr>
        </>
    )
}