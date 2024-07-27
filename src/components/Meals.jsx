import { useState, useEffect } from "react";
import data from "../../backend/data/available-meals.json";
import MealItem from "./MealItem";

const Meals = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);

  
  useEffect(() => {
    

    async function fetchMeals() {


    // data.map((data, i) => (
    //   <h1>{data.name}</h1>
    // ))

    //   const response = await fetch('http://localhost:3000/meals/');
  
    //   const meals = await response.json();
    //   setLoadedMeals(meals);

    }



    fetchMeals();
  }, []);
  
  return (
    <ul id="meals">
      {data.map((meal) => (
        <MealItem meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;
