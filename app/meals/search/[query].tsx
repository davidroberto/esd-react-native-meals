import MealListItem from "@/component/meals/MealListItem";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

const SearchResultsScreen = () => {
  const { query } = useLocalSearchParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    (async () => {
      const mealsJson = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + query);
      const meals = await mealsJson.json();
      setMeals(meals.meals);
    })();
  }, []);

  return (
    <View>
      <Text>Résultats de recherche pour "{query}"</Text>

      <FlatList
        data={meals}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => <MealListItem meal={item} />}
      />
    </View>
  );
};

export default SearchResultsScreen;
