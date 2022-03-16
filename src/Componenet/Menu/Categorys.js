import React from 'react';

const Categorys = ({ filterItems, category }) => {
    return (
        <div className="btn-containerss mb-4">
      {category.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
    );
};

export default Categorys;