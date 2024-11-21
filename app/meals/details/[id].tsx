import { useGetMealById } from "@/hook/useGetMealById";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View, Image, Alert } from "react-native";

const MealDetailScreen = () => {
  const { id } = useLocalSearchParams();

  const meal = useGetMealById(id);

  if (!meal) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>Meal Detail</Text>

      <Text>{meal.strMeal}</Text>
      <Text>{meal.strCategory}</Text>
      <Text>{meal.strArea}</Text>
      <Text>{meal.strInstructions}</Text>
      <Image source={{ uri: meal.strMealThumb }} style={{ width: 200, height: 200 }} />
    </View>
  );
};

export default MealDetailScreen;
