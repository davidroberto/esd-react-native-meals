import { router } from "expo-router";
import { Button, Text, View } from "react-native";

const MealListItem = ({ meal }) => {
  const handleNavigateToDetails = (id) => {
    router.push("/meals/details/" + id);
  };

  return (
    <View>
      <Text>{meal.strMeal}</Text>
      <Button title="Voir la recette" onPress={() => handleNavigateToDetails(meal.idMeal)} />
    </View>
  );
};

export default MealListItem;
