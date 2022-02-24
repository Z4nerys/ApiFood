import React, { useState } from 'react'

export const FoodCard = ({
    id,
    name,
    title,
    image,
    origin,
    status,
    add,
}) => {

    
    const [showDetail, setShowDetail] = useState(false)

    const handleDetail = () => {
        setShowDetail(!showDetail)
    }
    

    return (
        <div className='col-md-4 col-sm-5 col-lg-3 mb-4'>
            <div className="card" >
                <h5 style={{ height: "2rem" }} className='mt-3 card-title'>{name}</h5>
                <img className="card-img-top" src={image} alt={title} />
                <p style={{ height: "3rem" }} className="mt-4 text-muted">origin: {origin.name}</p>
                <p className='card-text'>status: {status}</p>
                {
                    showDetail ?
                        <>
                            <p className='text-card'>soy detalle, soy una comida muy rica y deliciosa</p>
                            <button className='btn btn-warning mb-2' onClick={handleDetail}>ocultar</button>
                        </>
                        :
                        <>
                            <button className='btn btn-warning mb-2' onClick={handleDetail}>detail</button>
                        </>
                }

                {/* {buy ?
                    <button className="btn btn-dark" onClick={()=>remove(id)}>eliminar</button>
                    :
                } */}
                <button className="btn btn-primary" onClick={()=>add(id) }>Buy</button>
            </div>
        </div>
    )
}
