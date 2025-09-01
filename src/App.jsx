import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/Color/Colorform";
import "./App.css";
import { uid } from "uid";
import { useState } from "react";

function App() {
const [colors,setColors]= useState(initialColors);
  function handleAddColor(newColor) {
    const colorWithId = { ...newColor, id: uid() };
    setColors([...colors, colorWithId]);

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmit={handleAddColor} />
      {initialColors.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;
console.log("Find Issue 1");
