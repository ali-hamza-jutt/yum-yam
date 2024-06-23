import React from 'react'
import Card from '../Card/Card'
import './CardsContainer.css'
function CardsContainer() {
  return (
    <div className="cards-container">
        <h1 className='just-for-you-heading'>Just for you</h1>
        <Card rating={2}/>
    </div>
  )
}

export default CardsContainer