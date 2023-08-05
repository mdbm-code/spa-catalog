import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const CategoryItem = ({
  idCategory: id,
  strCategory: name,
  strCategoryThumb: url,
  strCategoryDescription: description,
}) => {
  return (
    <div className='card'>
      <div className='card-image'>
        <img src={url} alt={name} />
      </div>
      <div className='card-content'>
        <span className='card-title'>{name}</span>
        {<p>{description.slice(0, 60)}...</p>}
      </div>
      <div className='card-action'>
        <Link to={`/category/${name}`} className='btn'>
          watch category
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
