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
    <form onSubmit={handlesubmit}>
      <label className="color-card">
        Role
        <input name="role" type="text" />
      </label>
      <label className="color-card-headline">
        Hex
        <input name="hex" type="color" />
      </label>
      <label>
        Contrast Text
        <input name="contrasText" type="color" />
      </label>

      <button type="submit">ADD COLOR</button>
    </form>
  );
}
