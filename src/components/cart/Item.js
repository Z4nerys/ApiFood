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
        <div>{name}</div>
        <button className='btn btn-primary mr-2' onClick={()=>remove(id)}>remove</button>
    </>
    )
}

