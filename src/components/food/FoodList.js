import React from 'react'
import { FoodCard } from './FoodCard'

export const FoodList = ({ foods, add }) => {
    return (
        <div className='container'>
            <div className="row g-4 text-center">
                {
                    foods.map(food => {
                        return <FoodCard
                            key={food.id}
                            add = {add}
                            {...food}
                        />
                    })
                }
            </div>
        </div>
    )
}
