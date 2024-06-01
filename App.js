import { NavigationContainer } from "@react-navigation/native";

import { StyleSheet } from "react-native";
import { CategoryScreen } from "./screens/CategoryScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MealsOverViewScreen } from "./screens/MealsOverViewScreen";
import { MealsContextContainer } from "./MealsContext";
import { MealDetailsScreen } from "./screens/MealDetailsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FavoriteMeals } from "./screens/FavoriteMeals";
import { Ionicons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
export const TabNavigator = () => {
  return (
    <Tab.Navigator
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
      <Tab.Screen
        name="Home"
        component={CategoryScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="list" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteMeals}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" size={18} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

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
            component={TabNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Meal Overview Screen"
            component={MealsOverViewScreen}
          />
          <Stack.Screen name="detailsScreen" component={MealDetailsScreen} />
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
