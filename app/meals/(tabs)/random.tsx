import { useGetRandomMeal } from "@/hook/useGetRandomMeal";
import { Text, View } from "react-native";

const RandomMealScreen = () => {
  const randomMeal = useGetRandomMeal();

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
