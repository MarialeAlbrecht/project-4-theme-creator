import { useState } from "react";

// Create the function Copy with the prop ColorToCopy that will be saving the copyHex.
//the CopyHex is a usestate boolean that have an inicial state of false.
//handleCopy is a function that calls the clipboard library(?), change the estatus of the copyHex in the colorToCopy.
// We add a settimeOut function that reverse the setCopyHex to False after 3s.
// We return a button that when clicked will run the handleCopy function. If the copyHex is false (initial value), will show Copy, if not Successfully Copied.

export default function Copy({ colorToCopy }) {
  const [copyHex, setCopyHex] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(colorToCopy);
    setCopyHex(true);
    setTimeout(() => {
      setCopyHex(false);
    }, 3000);
  };
  return (
    <>
      <button onClick={handleCopy}>
        {copyHex ? "Successfully copied!" : "Copy"}
      </button>
    </>
  );
}
