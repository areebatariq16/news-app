import React from 'react';

const categories = ["sports", "politics", "entertainment", "health", "fitness"];

const Categories = ({ setSearch }) => {
  return (
    <div className='categorybtn'>
      {categories.map(category => (
        <button key={category} onClick={() => setSearch(category)}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default Categories;
