import React from 'react';
import {
  useParams,
  useHistory,
  useRouteMatch,
  useLocation,
} from 'react-router-dom/cjs/react-router-dom';

const Movies = () => {
  const value = useParams();
  const hist = useHistory();
  const urm = useRouteMatch();
  const loc = useLocation();
  console.log('useParams', value);
  console.log('useHistory', hist);
  console.log('useRouteMatch', urm);
  console.log('useLocation', loc);

  return (
    <>
      <div>Movies</div>
      <button className='btn' onClick={hist.goBack}>
        back
      </button>
    </>
  );
};

export { Movies };
