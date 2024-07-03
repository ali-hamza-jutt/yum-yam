import React from 'react'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Navbar from '../../components/Navbar/Navbar'
import { useLocation } from 'react-router-dom';
import ReactReadMoreReadLess from 'react-read-more-read-less';
import ReviewBox from '../../components/CommentBox/ReviewBox';
import TextEditor from '../../components/TextEditor/TextEditor';
import Footer from '../../components/Footer/Footer';

import './RecipeDescription.css'
import Nutrients from '../../components/Nutrients/Nutrients';


function RecipeDescription() {
    // const location=useLocation();
    // const {recipe}=location.state;
    // const details = recipe?.content?.details;
    // console.log(details)

    const myLongText='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur temporibus dicta harum. Hic, amet? Autem odio totam expedita. Aspernatur possimus dolore praesentium dolorum ex facilis deleniti totam voluptatum at rerum voluptate, ad placeat dolorem.';
  return (
    <div className='recipe-description-container'>
        <Navbar/>
        <div className="details-section">
            <div className="left-details-section">
                <h1 className='recipe-name'>PineApple Dessert</h1>
                <p className='source-name'>I am Baker</p>
                <p className='rating'>
                <Box
              sx={{
                '& > legend': { mt: 3 },
                '.MuiRating-iconEmpty': {
                  color: '#f2f2f2',
                },
                '.MuiRating-iconFilled': {
                  color: '#e16120',
                },
              }}
            >
              <Rating
                name="read-only"
                value={4}
                readOnly
                precision={0.1}
              />
            </Box>
                </p>
                <p className="recipe-description">
                <ReactReadMoreReadLess
                charLimit={100}
                readMoreText={"Read more"}
                readLessText={"Read less"}
                readMoreStyle={{color:'#3a9691',fontSize:'18px',fontWeight:'450',cursor:'pointer'}}
                readLessStyle={{color:'#3a9691',fontSize:'18px',fontWeight:'450',cursor:'pointer'}}
            >
                {myLongText}
            </ReactReadMoreReadLess>
                </p>
                <div className="cooking-details">
                  <div className="no-of-ingredients cooking-detail">
                    <p className="value">
                      7
                      </p>
                    <p className="detail-name">
                      Ingredients
                    </p>
                  </div>
                  <div className="no-of-minutes cooking-detail">
                    <p className="value">
                      45
                      </p>
                    <p className="detail-name">
                      Minutes
                    </p>
                  </div>
                  <div className="no-of-calories cooking-detail">
                    <p className="value">
                      1470
                      </p>
                    <p className="detail-name">
                      Calories
                    </p>
                  </div>
                </div>
            </div>
            <div className="right-details-section">
                <img className='recipe-img' src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D" alt="name" />
            </div>
        </div>
        <div className="ingredient-details-container">
              <div className="ingredient-details-header">
                <div className='ingredient-details-right-header'>
                  <p className='ingredient-heading simple-heading'>Ingredients</p>
                </div>
                <div className='ingredient-details-left-header'>
                  <p className="unit-type">US</p>
                  <p className="unit-type">Metric</p>
                  <p className="no-of-serving">4 Serving</p>
                </div>
                   
              </div>
              <div className="ingredient-details">
                <p className="ingredient-detail">
                  <span className='quantity'>220 grams </span>
                  <span className='ingredient-name'>cream cheese </span>
                  <span className='condition'>(room temparutre)</span>
                </p>
              </div>
              <div className="ingredient-details">
                <p className="ingredient-detail">
                  <span className='quantity'>220 grams </span>
                  <span className='ingredient-name'>cream cheese </span>
                  <span className='condition'>(room temparutre)</span>
                </p>
              </div>
              <div className="ingredient-details">
                <p className="ingredient-detail">
                  <span className='quantity'>220 grams </span>
                  <span className='ingredient-name'>cream cheese </span>
                  <span className='condition'>(room temparutre)</span>
                </p>
              </div>
              <div className="ingredient-details">
                <p className="ingredient-detail">
                  <span className='quantity'>220 grams </span>
                  <span className='ingredient-name'>cream cheese </span>
                  <span className='condition'>(room temparutre)</span>
                </p>
              </div>
              <div className="ingredient-details">
                <p className="ingredient-detail">
                  <span className='quantity'>220 grams </span>
                  <span className='ingredient-name'>cream cheese </span>
                  <span className='condition'>(room temparutre)</span>
                </p>
              </div>
              <div className="ingredient-details">
                <p className="ingredient-detail">
                  <span className='quantity'>220 grams </span>
                  <span className='ingredient-name'>cream cheese </span>
                  <span className='condition'>(room temparutre)</span>
                </p>
              </div>
              <div className="ingredient-details">
                <p className="ingredient-detail">
                  <span className='quantity'>220 grams </span>
                  <span className='ingredient-name'>cream cheese </span>
                  <span className='condition'>(room temparutre)</span>
                </p>
              </div>
        </div>
        
        <Nutrients/>
         <TextEditor/>     
         < ReviewBox/>
         < ReviewBox/>
         <Footer/>
    </div>
  )
}

export default RecipeDescription