import axios from 'axios'
import React, { useState } from 'react'

export const FoodCard = ({
    id,
    title,
    image,
    add,
}) => {

    const [showDetail, setShowDetail] = useState(false)

    const [textDetail, setTextDetail] = useState('')

    const apikey= '5ec1b4b811504fbfbef0a567e9059c05'
    
    const HandleDetail = (id) => {
        setShowDetail(!showDetail)
        axios.get(`https://api.spoonacular.com/recipes/${id}/information?&apiKey=${apikey}`)
        .then(response => {
            console.log(response.data)
            setTextDetail(response.data.summary)
        }).catch(e => console.log(e))   
    }


    return (
        <div className='col-md-4 col-sm-5 col-lg-3 mb-4'>
            <div className="card">
                <h5 style={{ height: "3rem" }} className='mt-3 card-title'>{title}</h5>
                <img className="card-img-top mb-2" src={image} alt={title} />
                {
                    showDetail ?
                        <>
                            <p dangerouslySetInnerHTML={{ __html: textDetail}} className='text-card'/>
                            <button className='btn btn-warning mb-2' onClick={() =>HandleDetail(id)}>ocultar</button>
                        </>
                        :
                        <>
                            <button className='btn btn-warning mb-2' onClick={() =>HandleDetail(id)}>detail</button>
                        </>
                }

                <button className="btn btn-primary" onClick={() => add(id)}>Buy</button>
            </div>
        </div>
    )
}
