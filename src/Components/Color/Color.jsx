import { useState } from "react";
import "./Color.css";

export default function Color({ color, onDelete }) {
  const [confirmDelete, setConfirmDelete] = useState(false);
  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: "white",
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>

      {confirmDelete ? (
        <>
          <p className="color-card-hightlight">Really delete?</p>
          <button type="submit" onClick={() => setConfirmDelete}>
            Cancel
          </button>
          <button type="submit" onClick={() => onDelete(color.id)}>
            Delete
          </button>
        </>
      ) : (
        <button type="submit" onClick={() => setConfirmDelete(true)}>
          Delete
        </button>
      )}
    </div>
  );
}
