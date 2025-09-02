import { useState } from "react";
import "./Color.css";
import ColorForm from "./Colorform";

export default function Color({ color, ondelete, update }) {
  const [confirmDelete, setConfirmDelete] = useState(false);

  const [confirmEdit, setConfirmEdit] = useState(false);

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
          <button type="submit" onClick={() => setConfirmDelete(false)}>
            Cancel
          </button>
          <button type="submit" onClick={() => ondelete(color.id)}>
            Delete
          </button>
        </>
      ) : (
        <>
          <button type="submit" onClick={() => setConfirmDelete(true)}>
            Delete
          </button>
          {!confirmEdit ? (
            <button type="button" onClick={() => setConfirmEdit(true)}>
              Edit
            </button>
          ) : null}
        </>
      )}
    </div>
  );
}
