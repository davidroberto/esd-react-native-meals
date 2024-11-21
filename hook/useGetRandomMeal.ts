import { useEffect, useState } from "react";

export const useGetRandomMeal = () => {
  const [randomMeal, setRandomMeal] = useState(null);

  useEffect(() => {
    (async () => {
      const mealsJson = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
      const meals = await mealsJson.json();

      setRandomMeal(meals.meals[0]);
    })();
  }, []);

  return randomMeal;
};
