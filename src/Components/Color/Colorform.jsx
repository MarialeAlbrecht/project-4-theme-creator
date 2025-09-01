import "./Color.css";

export default function ColorForm() {
  function handlesubmit(event) {
    event.preventDefault();
    const FormData = new FormData(event.target);
    const data = Object.fromEntries(FormData);
    console.log("form sumited", data);

    event.target.reset();
  }
  return (
    <form className="color-form" onSubmit={handlesubmit}>
      <label>
        Role
        <input id="role" name="role" type="text" />
      </label>
      <label>
        Hex
        <input id="hex" name="hex" type="text" />
        <input id="hex" name="hex" type="color" />
      </label>
      <label>
        Contrast Text
        <input id="ContrasText" name="ContrasText" type="text" />
        <input id="ContrasText" name="contrasText" type="color" />
      </label>

      <button type="submit">ADD COLOR</button>
    </form>
  );
}
