import { useState } from "react";
import "./Color.css";
import ColorForm from "./Colorform";

export default function Color({ color, ondelete, update }) {
  // Added props ondelte and update. This props will be passed to the App.jsx. Ondelete had the values of the color.id and update has the values of the updated colors.
  const [confirmDelete, setConfirmDelete] = useState(false);
  //confirmDelete is a boolean that will change state. True will be set to delete the card and false to keep the card.
  const [confirmEdit, setConfirmEdit] = useState(false);
  // confirmEdit is also a boolean that will change state. True will open the update form and false will do nothing.
  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
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
          {!confirmEdit && (
            <button type="button" onClick={() => setConfirmEdit(true)}>
              Edit
            </button>
          )}
          {confirmEdit && (
            <>
              <ColorForm
                Formkeys={color}
                onSubmit={(updatedColor) => {
                  update(color.id, updatedColor);
                  setConfirmEdit(false);
                }}
                submitLabel="Update"
              />
              <button type="button" onClick={() => setConfirmEdit(false)}>
                Cancel
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
}
