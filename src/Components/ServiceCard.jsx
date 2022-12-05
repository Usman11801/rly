import React from 'react'

const ServiceCard = ({title,Description,number}) => {
  return (

        <div className='card'>
            <div className='cardinside'>
                <p className='numbercard'>//  { number}</p>
                <p className='titlecard' >{title}</p>
                <p className='descriptioncard'>{Description}</p>
            </div>
        </div>
  )
}

export default ServiceCard