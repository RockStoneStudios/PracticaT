import React from 'react'
import './styles.css';

export const Card = ({title,image,description}) => {
  return (
    <div className='card'>
      <div className='face front'>
         <img src= {image} alt=''/>
         <h2>{title}</h2>
      </div>
       <div className="face back">
        <h3>{title}</h3>
        <p>{description}</p>
       </div>
    </div>
  )
}
