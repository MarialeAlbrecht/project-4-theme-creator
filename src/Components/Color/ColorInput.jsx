import { useState } from "react";

export default function ColorInput({ id, defaultValue }) {
  const [input, setInput] = useState(defaultValue);

  function handleInput(event) {
    setInput(event.target.value);
  }
  return (
    <>
      <input
        type="text"
        id={id}
        name={id}
        value={input}
        onChange={handleInput}
      />
    </>
  );
}
