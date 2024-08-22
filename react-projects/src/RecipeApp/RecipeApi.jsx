import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import axios from 'axios';

const RecipeApi = () => {
  const APP_ID = "f7e044fd";
  const APP_KEY = "463d29a7e9b63013212e1cd2dd48ff9b";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("veg curry");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      setRecipes(response.data.hits);
    } catch (error) {
      console.error("Error fetching the recipes:", error);
    }
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-black text-white p-8">
      <form 
        className="mb-8 flex items-center justify-center"
        onSubmit={getSearch}
      >
        <input
          className="w-full max-w-md px-4 py-2 text-gray-800 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="Search for a recipe..."
        />
        <button
          className="px-6 py-2 bg-yellow-500 text-gray-900 rounded-r-lg hover:bg-yellow-600 transition-all"
          type="submit"
        >
          Search
        </button>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeApi;
