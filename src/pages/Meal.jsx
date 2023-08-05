import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { getMealById } from '../api';
import Preloader from '../components/Preloader';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const Meal = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState({});

  //const { goBack } = useHistory();
  const {
    //idMeal,
    strMeal,
    strDrinkAlternate,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
    strTags,
    strYoutube,
  } = meal;

  useEffect(
    function getMealInfo() {
      getMealById(id).then((data) => setMeal(data.meals[0]));
    },
    [id]
  );

  if (!Object.keys(meal).length) {
    return <Preloader />;
  }

  return (
    <div className='col s12 m7'>
      <h2 className='header'>{strMeal}</h2>
      <div className='card horizontal'>
        <div className='card-image'>
          <div className='row'>
            <div className='col s6'>
              <img src={strMealThumb} alt={strMeal} />
            </div>
            <div className='col s6'>
              <ul className='collection'>
                {strCategory && (
                  <li className='collection-item'>
                    <div>
                      Category
                      <Link
                        to={'/category/' + strCategory}
                        className='secondary-content'
                      >
                        <i className='material-icons'>{strCategory}</i>
                      </Link>
                    </div>
                  </li>
                )}
                <li className='collection-item'>
                  <div>
                    Area
                    <a href='#!' className='secondary-content'>
                      <i className='material-icons'>{strArea}</i>
                    </a>
                  </div>
                </li>
                {strDrinkAlternate && (
                  <li className='collection-item'>
                    <div>
                      Drink Alternate
                      <a href='#!' className='secondary-content'>
                        <i className='material-icons'>{strDrinkAlternate}</i>
                      </a>
                    </div>
                  </li>
                )}
                {strTags && (
                  <li className='collection-item'>
                    <div>
                      Tags
                      <a href='#!' className='secondary-content'>
                        <i className='material-icons'>{strTags}</i>
                      </a>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className='card-stacked'>
          <div className='card-content'>
            <p>{strInstructions}</p>
            <br />
            <div className='divider'></div>
            <h5 className='centered'>Recipe</h5>
            <table className='centered striped'>
              <thead>
                <tr>
                  <th>Ingredient</th>
                  <th>Measure</th>
                </tr>
              </thead>

              <tbody>
                {Object.keys(meal).map((key) => {
                  if (key.includes('strIngredient') && meal[key]) {
                    const pos = key.replace('strIngredient', '');
                    return (
                      <tr key={key}>
                        <td>{meal['strIngredient' + pos]}</td>
                        <td>{meal['strMeasure' + pos]}</td>
                      </tr>
                    );
                  } else {
                    return null;
                  }
                })}
              </tbody>
            </table>
          </div>
          <div className='card-action'>
            {strYoutube && (
              <>
                <h5>Video recipe</h5>
                <iframe
                  // width='560'
                  // height='315'
                  src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`}
                  title='YouTube video player'
                  frameBorder='0'
                  allowFullScreen
                ></iframe>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Meal };
