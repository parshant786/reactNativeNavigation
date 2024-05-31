import { useNavigation, useRoute } from "@react-navigation/native";
import { useContext, useLayoutEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { MealCard } from "../components/MealCard";
import { MealsContext } from "../MealsContext";

export const MealsOverViewScreen = () => {
  const { selectedCatergory } = useContext(MealsContext);

  const route = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.title,
    });
  }, []);

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={selectedCatergory}
        renderItem={(itemData) => {
          return <MealCard itemData={itemData} />;
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
