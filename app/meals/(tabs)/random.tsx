import { useEffect, useState } from "react";
import { Text, View } from "react-native";

const RandomMealScreen = () => {
  const [randomMeal, setRandomMeal] = useState(null);

  useEffect(() => {
    (async () => {
      const mealsJson = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
      const meals = await mealsJson.json();

      setRandomMeal(meals.meals[0]);
    })();
  }, []);

  return (
    <View>
      <Text>Random Meal</Text>
      {randomMeal === null ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          <Text>{randomMeal.strMeal}</Text>
          <Text>{randomMeal.strInstructions}</Text>
        </View>
      )}
    </View>
  );
};

export default RandomMealScreen;
