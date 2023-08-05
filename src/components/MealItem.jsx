import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const MealItem = ({ strMeal: name, strMealThumb: url, idMeal: id }) => {
  return (
    <div className='card card-meal'>
      <div className='card-image'>
        <img src={url} alt={name} />
      </div>
      <div className='card-content'>
        <span className='card-title'>{name}</span>
      </div>
      <div className='card-action'>
        <Link to={`/meal/${id}`} className='btn'>
          watch recipe
        </Link>
      </div>
    </div>
  );
};

export default MealItem;
