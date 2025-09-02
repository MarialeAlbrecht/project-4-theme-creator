import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/Color/Colorform";
import "./App.css";
import { uid } from "uid";
import { useState } from "react";

function App() {
  const [colors, setColors] = useState(initialColors);
  function handleAddColor(newColor) {
    const colorWithId = { ...newColor, id: uid() };
    setColors([colorWithId, ...colors]);
  }

  function handleDelete(id) {
    setColors(colors.filter((color) => color.id !== id));
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmit={handleAddColor} />
      {colors.length === 0 ? (
        <p>Add a new color.</p>
      ) : (
        colors.map((color) => {
          return <Color key={color.id} color={color} onDelete={handleDelete} />;
        })
      )}
    </>
  );
}

export default App;
console.log("Find Issue 1");
