import React, { useContext } from "react";
import { AnimalContext } from "../context/AnimalContext";

const Consumer = () => {
  const bird = useContext(AnimalContext); // Extract 'bird' data from context

  return (
    <div className="p-4 border rounded shadow">
      <h2>Bird Details</h2>
      <p>Name: {bird.name}</p>
      <p>Color: {bird.color}</p>
      <p>Can Talk: {bird.canTalk ? "Yes" : "No"}</p>
    </div>
  );
};

export default Consumer;
