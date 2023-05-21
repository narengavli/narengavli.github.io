import React from 'react'

const Academics = ({ item }) => {
    return (
        <>
            {item.map((Val) => {
                return (
                    <div className='row border-bottom py-4' key={Val.id}>
                        <div className='col col-12 col-md-3 d-flex align-items-center fw-bold'>
                            {Val.year}
                        </div>
                        <div className='col col-12 col-md-3 d-flex flex-md-column justify-content-md-center fw-bold'>
                            <div>
                                {Val.role},
                            </div>
                            <div>
                                {Val.place}
                            </div>
                        </div>
                        <div className='col col-12 col-md-6'>
                            {Val.description}
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Academics