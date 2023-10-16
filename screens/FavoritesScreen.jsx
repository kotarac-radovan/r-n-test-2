import { useContext } from "react";
import MealsList from "../components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, View, Text, } from "react-native";

function FavoritesScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootCotainer}>
        <Text style={styles.text}>No Favorite Meals Yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootCotainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
