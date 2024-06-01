import { useNavigation } from "@react-navigation/native";
import React, { useContext, useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { SubDetailSection } from "../components/SubDetailSection";
import { MealsContext } from "../MealsContext";
import { Ionicons } from "@expo/vector-icons";
export const MealDetailsScreen = () => {
  const navigation = useNavigation();
  const { selectedMeal, favoriteMeals, setFavoriteMeals } = useContext(MealsContext);

  const {
    title,
    imageUrl,
    duration,
    affordability,
    complexity,
    ingredients,
    steps,
    id,
  } = selectedMeal || {};
  const handlePress = () => {
     console.log( "hi",id,favoriteMeals)
    favoriteMeals.includes(id)
      ? setFavoriteMeals((pre) => pre.filter((currentId) => id !== currentId))
      : setFavoriteMeals((pre) => [...pre, id]);
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
      headerRight: () => (
        <Pressable android_ripple={{ color: "#fff" }} onPress={handlePress}>
          <Ionicons
            name="star"
            size={24}
            color={favoriteMeals.includes(id) ? "gold" : "black"}
          />
        </Pressable>
      ),
    });
  }, [favoriteMeals]);

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
    color: "#f4f4f4",
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
