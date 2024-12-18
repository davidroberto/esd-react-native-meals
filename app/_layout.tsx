import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Accueil" }} />
      <Stack.Screen name="meals" options={{ headerShown: false }} />
      <Stack.Screen name="user" options={{ title: "user" }} />
    </Stack>
  );
}
