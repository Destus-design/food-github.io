import React,{useEffect, useState} from 'react';
import Recipe from "./Recipe";
import './App.css';

const App = () => {
    const APP_ID = "3b515800";
    const APP_KEY = "355e28d4e760566ef7a6748402f3fb0a";
    
const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState("");
const [query, setQuery] = useState('chicken');

   useEffect(() => {
   getRecipes();
   }, [query]);

   const getRecipes = async () => {
     const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
     const data = await response.json();
     setRecipes(data.hits);
     console.log(data.hits);
   }

   const updateSearch = e => {
     setSearch(e.target.value);
   }

   const getSearch = e => {
     e.preventDefault();
     setQuery(search);
     setSearch("");
   }

       return (
      <div className="App">
        <h2 className="head">Fruit-Food Network <br/> <i className="head">Recipes</i> </h2>
       <form onSubmit={getSearch} className="search-form">
         <input className="search-bar" type="text" value={search} onChange={updateSearch} />
       <button className="search-button" type="submit">Search</button>
       </form>
       <div className="recipes">
         {recipes.map(recipe => (
         <Recipe 
         key={recipe.recipe.label}
          title={recipe.recipe.label} 
          cautions={recipe.recipe.cautions}
         image={recipe.recipe.image}
         ingredients={recipe.recipe.ingredients}
         />
       ))}
       </div>
       
      </div>
    );
}

export default App;
