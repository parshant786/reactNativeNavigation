import React, { createContext, useState } from "react";
  export const MealsContext = createContext();
export const MealsContextContainer = ({ children }) => {
  const [selectedCatergory, setSelectedCatagory] = useState();
  return (
    <MealsContext.Provider
      value={{
        selectedCatergory,
        setSelectedCatagory,
      }}
    >
      {children}
    </MealsContext.Provider>
  );
};
