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
        <input name="role" type="text" />
      </label>
      <label>
        Hex
        <input name="hex" type="text" />
        <input name="hex" type="color" />
      </label>
      <label>
        Contrast Text
        <input name="hex" type="text" />
        <input name="contrasText" type="color" />
      </label>

      <button type="submit">ADD COLOR</button>
    </form>
  );
}
