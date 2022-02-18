import React from 'react'

export const FoodList = ({ foods }) => {
    return (
        <div className='container'>
            <div className="row g-4 text-center">
                {
                    foods.map(food => {
                        return <div className='col-md-4 col-sm-5 col-lg-3 mb-4' key={food.id}>
                            <div className="card" >
                                <h5 style={{height: "3rem"}} className='mt-4 card-title'>{food.name}</h5>
                                <img className="card-img-top" src={food.image} alt={food.title} />
                                <p style={{height: "3rem"}} className="mt-4 text-muted">origin: {food.origin.name}</p>
                                <p className='card-footer'>status: {food.status}</p>
                                <button className="btn btn-dark">Buy</button>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
