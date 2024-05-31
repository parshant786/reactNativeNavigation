import React, { createContext, useState } from "react";
export const MealsContext = createContext();
export const MealsContextContainer = ({ children }) => {
  const [selectedCatergory, setSelectedCatagory] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState({});
  return (
    <MealsContext.Provider
      value={{
        selectedCatergory,
        setSelectedCatagory,
        selectedMeal,
        setSelectedMeal,
      }}
    >
      {children}
    </MealsContext.Provider>
  );
};
