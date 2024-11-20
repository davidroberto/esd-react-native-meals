import { router } from "expo-router";
import { Button, Text, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

const MealActions = () => {
  return (
    <View>
      <Button title="Supprimer" />
    </View>
  );
};

const MealListItem = ({ meal }) => {
  const handleNavigateToDetails = (id) => {
    router.push("/meals/details/" + id);
  };

  return (
    <Swipeable renderRightActions={MealActions}>
      <Text>{meal.strMeal}</Text>
      <Button title="Voir la recette" onPress={() => handleNavigateToDetails(meal.idMeal)} />
    </Swipeable>
  );
};

export default MealListItem;
