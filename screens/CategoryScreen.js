import { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { GridCategoryItem } from "../components/GridCategoryItem";
import { CATEGORIES } from "../data/dummy-data";
import { MealsContext } from "../MealsContext";

export const CategoryScreen = ({ navigation }) => {
  const { selectedCatergory,setSelectedCatagory } = useContext(MealsContext);


  const renderItemFunction = ({ item }) => {
    return (
      <GridCategoryItem
        color={item.color}
        title={item.title}
        id={item.id}
        // onPress={handleCatagoryScreen}
      />
    );
  };
  return (
    <View>
      <View>
        <FlatList
          data={CATEGORIES}
          keyExtractor={(item) => item.id}
          renderItem={renderItemFunction}
          numColumns={2}
        />
      </View>
    </View>
  );
};
