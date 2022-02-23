import React from 'react'

export const Item = ({
    id,
    name,
    gender,
    image,
    species,
    status,
    remove
}) => {
    return (
        <>
            <tr >
                <th scope="row">{id}</th>
                <td>{name}</td>
                <td><img src={image} width={100} alt={name}/></td>
                <td>{gender}</td>
                <td><button className='btn btn-info' onClick={()=>remove(id)}>remove</button></td>
            </tr>
        </>
    )
}