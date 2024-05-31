import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import { MealsContext } from "../MealsContext";

export const GridCategoryItem = ({ title, color, id }) => {
  const { selectedCatergory, setSelectedCatagory } = useContext(MealsContext);
  const navigate = useNavigation();
  const handleClick = () => {
    setSelectedCatagory(() =>
      MEALS.filter((meal) => meal.categoryIds.includes(id))
    );
    navigate.navigate("Meal Overview Screen",{
      title:title+" Meals Overview"
    });
  };

  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "red" }}
        style={[styles.box, { backgroundColor: color }]}
        onPress={handleClick}
      >
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 8,
    overflow: "hidden",
  },
  box: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
