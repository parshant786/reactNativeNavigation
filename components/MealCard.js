import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { MealsContext } from "../MealsContext";

export const MealCard = ({ itemData }) => {
  const { setSelectedMeal } = useContext(MealsContext);
  const navigation = useNavigation();
  let { item } = itemData;
  let { title, imageUrl, duration, complexity, affordability, id } = item;

  const handlePress = () => {
    setSelectedMeal(item);
    navigation.navigate("detailsScreen");
  };

  return (
    <View style={styles.cardContainer}>
      <Pressable android_ripple={{ color: "grey" }} onPress={handlePress} >
        <Image
          source={{
            uri: imageUrl,
          }}
          style={styles.image}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.mealTitle}>Meal Name : {title}</Text>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailItem}>{duration} m</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    backgroundColor: "#FFFFFF",
    marginBottom: 10,
    borderRadius: 8,
    overflow: "hidden",
    elevation: 10,
  },

  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  infoContainer: {
    paddingVertical: 5,
  },
  mealTitle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  detailItem: {
    paddingHorizontal: 10,
  },
});
