import React, { useState } from 'react';

const Search = ({ cb = Function.prototype }) => {
  const [value, setValue] = useState();

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = () => {
    cb(value);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };
  return (
    <div className='row'>
      <div className='input-field col s12'>
        <input
          type='text'
          value={value}
          onChange={onChange}
          placeholder='search'
          onKeyDown={onKeyDown}
        />
        <button
          className='btn'
          onClick={() => onSubmit}
          style={{ position: 'absolute', top: 0, right: 0 }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
