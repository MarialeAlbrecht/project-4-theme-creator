import { useState } from "react";

export default function Copy(colorToCopy) {
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
      <button onClick={handleCopy}>Copy</button>
      {copyHex && <button>Succesfully copied!</button>}
    </>
  );
}
