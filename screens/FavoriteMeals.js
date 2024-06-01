import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { MealsContext } from "../MealsContext";
import { MEALS } from "../data/dummy-data";
import { MealCard } from "../components/MealCard";

export const FavoriteMeals = () => {
  const { selectedMeal, favoriteMeals, setFavoriteMeals } =
    useContext(MealsContext);
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={MEALS.filter((meal) => favoriteMeals.includes(meal.id))}
        renderItem={(itemData) => {
          return <MealCard itemData={itemData} page="favroite" />;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
    listContainer: {
      paddingVertical: 10,
    },
  });