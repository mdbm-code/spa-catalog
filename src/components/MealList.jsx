import React from 'react';
import MealItem from './MealItem';

const MealList = ({ meals }) => {
  return (
    <div className='meal-list'>
      {meals.map((item) => (
        <MealItem key={item.idMeal} {...item} />
      ))}
    </div>
  );
};

export { MealList };
