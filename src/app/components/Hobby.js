import React from 'react'
import './styles/hobby.css'

import { usePortfolioContext } from '../../context/DataContext'

const Hobby = () => {
    const { interest } = usePortfolioContext();
    return (
        <div className='d-flex'>
            {interest.map((Val) => {
                return (
                    <div className='interest-box rounded p-3 m-3' key={Val.name}>
                        <img src={process.env.PUBLIC_URL + Val.image} height={50} width={50} alt={Val.name} />
                    </div>
                )
            })}
        </div>
    )
}

export default Hobby