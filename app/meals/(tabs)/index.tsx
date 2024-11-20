import MealListItem from "@/component/meals/MealListItem";
import { FlatList, Text, View } from "react-native";
import { useGetMeals } from "@/hook/useGetMeals";

export default function AllMealsScreen() {
  const meals = useGetMeals();

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
