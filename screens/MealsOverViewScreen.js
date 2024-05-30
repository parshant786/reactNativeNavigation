import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useContext, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { MealsContext } from "../MealsContext";

export const MealsOverViewScreen = () => {
  const { selectedCatergory } = useContext(MealsContext);

  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: route.params.title,
    });
  }, []);
  console.log(selectedCatergory);
  return (
    <View>
      <FlatList
        data={selectedCatergory}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};
