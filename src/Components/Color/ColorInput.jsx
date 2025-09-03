import { useState } from "react";

export default function ColorInput({ id, defaultValue }) {
  //Function that will pass the id and defaultValue information.
  const [input, setInput] = useState(defaultValue); //input is a "variable" that will change and affect either the color picker or the text color.

  function handleInput(event) {
    setInput(event.target.value); //save the values of the input
  }
  return (
    // The input will be saved in the value const and and the handleinput will run the function.
    //Both text and colorpicker have the same input and listener function.
    //The colorpicker dont have a name of id because that input will be shared in the text input. Just one need it.
    <>
      <input
        type="text"
        id={id}
        name={id}
        value={input}
        onChange={handleInput}
      />
      <input type="color" value={input} onChange={handleInput} />
    </>
  );
}
