import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './CardsContainer.css';
import { recipeApi } from '../../apis/recipeApi';  // Ensure this import is correct

function CardsContainer() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await recipeApi();
        setRecipes(responseData.feed); // Assuming 'feed' contains the array of recipes
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="cards-component">
      <h1 className='just-for-you-heading'>Just for you</h1>
      <div className="cards-container">
        {recipes.map((recipe, index) => (
          <Card key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default CardsContainer;
