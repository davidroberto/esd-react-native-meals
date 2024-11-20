import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function MealsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="random"
        options={{
          title: "Recette Aléatoire",
          tabBarIcon: ({ color }) => <Ionicons name="search" size={24} color={color} />,
        }}
      />
      <Tabs.Screen name="index" options={{ title: "Toutes les recettes" }} />
    </Tabs>
  );
}
