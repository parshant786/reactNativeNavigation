import React, { createContext, useState } from "react";
export const MealsContext = createContext();
export const MealsContextContainer = ({ children }) => {
  const [selectedCatergory, setSelectedCatagory] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState({});
  const [favoriteMeals, setFavoriteMeals] = useState([]);
  return (
    <MealsContext.Provider
      value={{
        selectedCatergory,
        setSelectedCatagory,
        selectedMeal,
        setSelectedMeal,
        favoriteMeals,
        setFavoriteMeals,
      }}
    >
      {children}
    </MealsContext.Provider>
  );
};
