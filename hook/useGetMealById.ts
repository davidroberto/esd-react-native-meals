import { useEffect, useState } from "react";

export const useGetMealById = (id) => {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    (async () => {
      const mealJson = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const meal = await mealJson.json();

      setMeal(meal.meals[0]);
    })();
  }, []);

  return meal;
};
