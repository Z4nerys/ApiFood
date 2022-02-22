import React from 'react'

export const FoodCard = ({
    id,
    name,
    title,
    image,
    origin,
    status
}) => {
    const handleBuy = () =>{
        alert('soy ' + name)
    }
    return (
        <div className='col-md-4 col-sm-5 col-lg-3 mb-4'>
            <div className="card" >
                <h5 style={{ height: "3rem" }} className='mt-4 card-title'>{name}</h5>
                <img className="card-img-top" src={image} alt={title} />
                <p style={{ height: "3rem" }} className="mt-4 text-muted">origin: {origin.name}</p>
                <p className='card-footer'>status: {status}</p>
                <button className="btn btn-dark" onClick={handleBuy}>Buy</button>
            </div>
        </div>
    )
}
