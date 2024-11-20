import MealListItem from "@/component/meals/MealListItem";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function AllMealsScreen() {
  const [meals, setMeals] = useState([]);

  const router = useRouter();

  useEffect(() => {
    (async () => {
      const mealsJson = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
      const meals = await mealsJson.json();

      setMeals(meals.meals);
    })();
  }, []);

  return (
    <View>
      <Text>Toutes les recettes</Text>

      {meals.length === 0 ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={meals}
          keyExtractor={(item) => item.idMeal}
          renderItem={({ item }) => <MealListItem meal={item} />}
        />
      )}
    </View>
  );
}
