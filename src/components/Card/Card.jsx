import React from 'react'
import './Card.css'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


 


function Card({rating}) {
  return (
    <div className="card-container">
        <div className="card-img">
            <img src="https://lh3.googleusercontent.com/jFegBTI1rioV8hQZ0SCOu5RXVJ55m5fEZeZdrrJeqWKYwbPsXzNDn6cb_9OGczz7kpQl4lVt0PgL-f7Y63eI0w=w640-h640-c-rw-v1-e365" alt="YumYam" />
            <div className="image-layer">
                <p className='layer-text'>spices, eggs, salt, pepper, cheese, vegetables, milk</p>
            </div>
        </div>
        <div className="card-details">
            <div className="card-details-left">
                <p className='card-recipe-name'>Slower Cooker Chicken Marsala</p>
                <p className='card-recipe-poster'>Simple Nourished Living</p>
                <p className="card-rating"> 
                <Box
                sx={{
               '& > legend': { mt: 3 },
                '.MuiRating-iconEmpty': {
                  color: '#f2f2f2', // Change empty star color here
                },
                '.MuiRating-iconFilled': {
                  color: '#000000', // Change filled star color here
                },
              }}                >
                <Rating 
                name="read-only" 
                value={rating} 
                readOnly 
                precision={0.1} 
/>
      
                </Box>
            </p>
            </div>
            <div className="card-details-right">
                <p className='card-added-recipe-number'>3k</p>
            </div>
        </div>
    </div>
  )
}

export default Card