import { useNavigation } from "@react-navigation/native";
import React, { useContext, useLayoutEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { SubDetailSection } from "../components/SubDetailSection";
import { MealsContext } from "../MealsContext";

export const MealDetailsScreen = () => {
  const navigation = useNavigation();
  const { selectedMeal } = useContext(MealsContext);

  const {
    title,
    imageUrl,
    duration,
    affordability,
    complexity,
    ingredients,
    steps,
  } = selectedMeal || {};

  useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
    });
  }, []);

  return (
    <ScrollView style={styles.scrollContainer}>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.mealTitle}> {title}</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailItem}>{duration} m</Text>
          <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
        </View>
      </View>
      <SubDetailSection arr={ingredients} title={"Ingredients"} />
      <SubDetailSection arr={steps} title={"Steps"} />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  scrollContainer: {
    marginBottom: 20,
  },

  image: {
    width: "100%",
    height: 200,
    // borderRadius: 8,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  infoContainer: {
    paddingVertical: 5,
  },
  mealTitle: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color:"#f4f4f4",
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  detailItem: {
    paddingHorizontal: 10,
   fontWeight: "bold",
  },
});
