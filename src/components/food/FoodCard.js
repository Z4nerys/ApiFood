import React, { useState } from 'react'

export const FoodCard = ({
    id,
    name,
    title,
    image,
    origin,
    status
}) => {
    const [buy, setBuy] = useState(false)

    const handleBuy = () => {
        setBuy(!buy)
    }

    return (
        <div className='col-md-4 col-sm-5 col-lg-3 mb-4'>
            <div className="card" >
                <h5 style={{ height: "3rem" }} className='mt-4 card-title'>{name}</h5>
                <img className="card-img-top" src={image} alt={title} />
                <p style={{ height: "3rem" }} className="mt-4 text-muted">origin: {origin.name}</p>
                <p className='card-text'>status: {status}</p>
                <button className='btn btn-warning mb-2'>ver detalles</button>
                {buy ?
                    <button className="btn btn-primary" onClick={handleBuy}>Buy</button>
                    :
                    <button className="btn btn-dark" onClick={handleBuy}>eliminar</button>
                }
            </div>
        </div>
    )
}
