import MealListItem from "@/component/meals/MealListItem";
import { useEffect, useState } from "react";
import { FlatList, Text, View, TextInput, Button, Pressable, StyleSheet, TouchableOpacity } from "react-native";
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

  const handleNavigateToMeals = () => {
    router.push("/meals");
  };

  const handleNavigateToRandomMeal = () => {
    router.push("/meals/random");
  };

  const handleNavigateToUser = () => {
    router.push("/user/");
  };

  useEffect(() => {
    (async () => {
      const mealsJson = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
      const meals = await mealsJson.json();

      setMeals(meals.meals.slice(0, 3));
    })();
  }, []);

  return (
    <View>
      <TextInput placeholder="Rechercher" onChangeText={(text) => handleChangeSearch(text)} />
      <Button title="Rechercher" onPress={handleNavigateToSearch} />
      <Text>Les recettes de Roberto</Text>

      <Button title="Voir une recette aléatoire" color={"green"} />
      <Button title="Voir les params utilisateurs" color={"blue"} onPress={handleNavigateToUser} />

      <Pressable onPress={handleNavigateToMeals} style={styles.pressable}>
        <Text>Voir toutes les recettes</Text>
      </Pressable>

      <TouchableOpacity onPress={handleNavigateToRandomMeal} style={styles.touchable}>
        <Text>Voir une recette aléatoire </Text>
      </TouchableOpacity>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pressable: {
    backgroundColor: "red",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },

  touchable: {
    backgroundColor: "blue",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
});
