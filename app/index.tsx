import MealListItem from "@/component/meals/MealListItem";
import { useEffect, useState } from "react";
import { FlatList, Text, View, TextInput, Button } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const [meals, setMeals] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const router = useRouter();

  const handleChangeSearch = (text) => {
    setSearchQuery(text);
  };

  const handleNavigateToSearch = () => {
    if (searchQuery === "") {
      router.push("/index");
    } else {
      router.push("/meals/search/" + searchQuery);
    }
  };

  useEffect(() => {
    (async () => {
      const mealsJson = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
      const meals = await mealsJson.json();

      setMeals(meals.meals);
    })();
  }, []);

  return (
    <View>
      <TextInput placeholder="Rechercher" onChangeText={(text) => handleChangeSearch(text)} />
      <Button title="Rechercher" onPress={handleNavigateToSearch} />
      <Text>Les recettes de Roberto</Text>

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
