import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { getFilteredCategory } from '../api';
import Preloader from '../components/Preloader';
import { MealList } from '../components/MealList';

const Category = () => {
  const { name } = useParams();
  const [meals, setMeal] = useState([]);

  useEffect(
    function getMeal() {
      getFilteredCategory(name).then((data) => setMeal(data.meals));
    },
    [name]
  );

  return (
    <div>{!meals.length ? <Preloader /> : <MealList meals={meals} />}</div>
  );
};

export { Category };
