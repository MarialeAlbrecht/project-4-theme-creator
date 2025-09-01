import "./Color.css";
import ColorInput from "./ColorInput";

export default function ColorForm({
  onSubmit,
  Formkeys = { role: "add a role", hex: "#000", contrastText: "#000" },
}) {
  function handlesubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("form sumited", data);
    onSubmit(data);

    event.target.reset();
  }
  return (
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
          id="ContrasText"
          type="text"
          defaultValue={Formkeys.contrastText}
        />
      </label>

      <button type="submit">ADD COLOR</button>
    </form>
  );
}
