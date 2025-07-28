import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");
 // const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const fetchData = async () => {
    //setLoading(true);
    setError("");
    try {
      const data = await fetch("https://dummyjson.com/recipes/search?q="+ searchInput);
      // if(!data.ok) throw new Error ("HTTP error -status : " + data.status)
      if (!data.ok) throw new Error(`HTTP error! status: ${data.status}`);
      const json = await data.json();

      console.log(json.recipes);
      setRecipes(json?.recipes);
    } catch (err) {
      setError(err.message);
    } finally {
      //setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchInput]);

 // if (loading) return <h2>Loading...</h2>;
  if (error) return <h2 style={{ color: "red" }}>Error: {error}</h2>;

  return (
    <div className="App">
      <h3> Recipes with autocomplete search options </h3>
      <input
        type="text"
        className="search-input"
        placeholder="please search recipes"
        value = {searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <div className="recipe-container">

        {recipes.map((r) =>{
          return <span className = "recipe" key={r.id}>{r.name}</span>
        }) }

      </div>
    </div>
  );
};

export default App;
