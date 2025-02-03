import React, { createContext, useState } from "react";

// Create the Animal Context
export const AnimalContext = createContext();

// AnimalProvider Component
export const AnimalProvider = ({ children }) => {
  const [animalData, setAnimalData] = useState({
    monkey: { name: "Chimpanzee", age: 5, habitat: "Jungle" },
    phone: { brand: "Apple", model: "iPhone 15", price: 1200 },
    bird: { name: "Parrot", color: "Green", canTalk: true },
  });

  return (
    <AnimalContext.Provider value={animalData}>
      {children}
    </AnimalContext.Provider>
  );
};
