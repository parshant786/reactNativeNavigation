import { NavigationContainer } from "@react-navigation/native";

import { StyleSheet } from "react-native";
import { CategoryScreen } from "./screens/CategoryScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MealsOverViewScreen } from "./screens/MealsOverViewScreen";
import { MealsContextContainer } from "./MealsContext";
import { MealDetailsScreen } from "./screens/MealDetailsScreen";
// import { MealDetailsScreen } from "./screens/MealDetailsScreen";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <MealsContextContainer>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            contentStyle: {
              backgroundColor: "#9a6152",
            },
          }}
        >
          <Stack.Screen
            name="Meals Category Screen"
            component={CategoryScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen
            name="Meal Overview Screen"
            component={MealsOverViewScreen}
          />
           <Stack.Screen
            name="detailsScreen"
            component={MealDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </MealsContextContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    justifyContent: "center",
  },
});
