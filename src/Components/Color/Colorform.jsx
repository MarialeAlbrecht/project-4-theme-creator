import "./Color.css";
import ColorInput from "./ColorInput";

export default function ColorForm({
  //ColorForm is a function that holds the onsubmit and Fomrkeys props.
  onSubmit,
  Formkeys = { role: "add a role", hex: "#000000", contrastText: "#000000" },
}) {
  function handlesubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("form sumited", data);
    onSubmit(data); //We create an object with the form inputs.

    event.target.reset(); //We reset the form to the default values.
  }
  return (
    //I will call the handlesubmit function once the form is submited.
    //Below is the form structure. We use colorinput to match the text and the color selector in the form.
    <form className="color-form" onSubmit={handlesubmit}>
      <label>
        Role
        <input id="role" name="role" type="text" defaultValue={Formkeys.role} />
      </label>
      <label>
        Hex
        <ColorInput id="hex" type="text" defaultValue={Formkeys.hex} />
      </label>
      <label>
        Contrast Text
        <ColorInput
          id="contrastText"
          type="text"
          defaultValue={Formkeys.contrastText}
        />
      </label>

      <button type="submit">ADD COLOR</button>
    </form>
  );
}
