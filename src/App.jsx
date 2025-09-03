import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color"; //Import the props of the function
import ColorForm from "./Components/Color/Colorform"; //Imports the props of the function.
import "./App.css";
import { uid } from "uid"; // needed for generationg unique ids.
import { useState } from "react";
import { useEffect } from "react";

function App() {
  // The state of color will change. The default is the initial array of colors.
  //setColors will show the new color first and then the rest of the colors below.
  const [colors, setColors] = useState(() => {
    // We save the colors in savedColors as a string.
    // We will return the saved colors as a array (parse) if not we will just show the initial Colors.
    const savedColors = localStorage.getItem("colors");
    return savedColors ? JSON.parse(savedColors) : initialColors;
  });

  //We save savedcolors in a string to be used by the localStorage.
  //This will make colors have the stored information.
  useEffect(() => {
    localStorage.setItem("colors", JSON.stringify(colors));
  }, [colors]);

  //The function handleAddcolor, this will add the new colors and role and link a unique id.
  function handleAddColor(newColor) {
    const colorWithId = { ...newColor, id: uid() };
    setColors([colorWithId, ...colors]);
  }

  function handleDelete(id) {
    //This function filters the colors in where the ids match with the colors array.
    //The color id is passed from the ondelete,
    setColors(colors.filter((color) => color.id !== id));
  }

  function handleUpdate(id, updatedColor) {
    //This function will update the color cards.
    //We set the array of colors as previousColors and map the ones that have the same id.
    //If it the id match, wit will show the updated color.
    //If doesnt match, it will show the initial state of the object.
    setColors((previousColors) =>
      previousColors.map((previousColor) =>
        previousColor.id === id
          ? { ...previousColor, ...updatedColor }
          : previousColor
      )
    );
  }

  return (
    //We pass on the onSubmit the information of the form.
    //If the array is equal to 0, then the text appeas.
    //If not, we map the colors information.
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmit={handleAddColor} />
      {colors.length === 0 ? (
        <p>Add a new color.</p>
      ) : (
        colors.map((color) => {
          return (
            <Color
              key={color.id}
              color={color}
              onDelete={handleDelete}
              update={handleUpdate}
            />
          );
        })
      )}
    </>
  );
}

export default App;
console.log("Find Issue 1");
