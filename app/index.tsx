import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

export default function IndexScreen() {
  // je créé un state pour stocker les repas
  // au premier chargement du composant
  // le state est créé avec un tableau vide
  const [meals, setMeals] = useState([]);

  // je mets la récupération de mes données dans un useEffect
  // pour éviter que le fetch soit fait à l'infini
  // car mon fetch recharge le composant
  // et donc re-execute le fetch si le use effect n'est pas mis
  useEffect(() => {
    // j'utilise une fonction anonyme
    // qui s'autoinvoque : ça veut dire que dès qu'elle est lue
    // elle est executée
    // elle doit être asynchrone car elle utilise fetch
    // (quand on utilise des fonctionnalités asynchrones, on est
    // obligé de créer une fonction asynchrone)
    (async () => {
      // j'utilise fetch qui est asynchrone
      // mais je veux récupérer le résultat
      // donc je dois "transformer fetch en appel synchrone"
      const mealsJson = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
      const meals = await mealsJson.json();

      // quand c'est terminé (grâce à la syntaxe await)
      // je stocke les données dans le state
      setMeals(meals.meals);
    })();
  }, []);

  return (
    <View>
      <Text>Index Screen</Text>

      {meals.length === 0 ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={meals}
          keyExtractor={(item) => item.idMeal}
          renderItem={({ item }) => <Text>{item.strMeal}</Text>}
        />
      )}
    </View>
  );
}
