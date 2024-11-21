import MealListItem from "@/component/meals/MealListItem";
import { useEffect, useState } from "react";
import { FlatList, Text, View, TextInput, Button, Pressable, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useGetMeals } from "@/hook/useGetMeals";

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChangeSearch = (text) => {
    setSearchQuery(text);
  };

  // j'appelle le hook useGetMeals
  // pour récupérer les recettes
  const meals = useGetMeals();

  const router = useRouter();

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
