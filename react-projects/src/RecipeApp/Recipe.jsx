import React from 'react';

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-400 mb-4">{Math.round(calories)} calories</p>
        <ul className="text-gray-300">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="text-sm">
              {ingredient.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recipe;
