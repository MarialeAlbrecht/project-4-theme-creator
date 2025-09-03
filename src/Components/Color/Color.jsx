import { useState } from "react";
import "./Color.css";
import ColorForm from "./Colorform";

export default function Color({ color, onDelete, update }) {
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

      {confirmDelete ? ( // If confirm delete is true, then show all this grouped information: Default text, cancel button that if its clicked, will set the confirm to false and keep the initial state.
        //Delete that if clicked will "save the color id" on the ondelete prop.
        <>
          <p className="color-card-hightlight">Really delete?</p>
          <button type="submit" onClick={() => setConfirmDelete(false)}>
            Cancel
          </button>
          <button type="submit" onClick={() => onDelete(color.id)}>
            Delete
          </button>
        </>
      ) : (
        // If confirmdelete is false (initial state), then we will show the Delete and Edit buttons.
        //If Delete is cliced, it will set the confirm Delete to true and rund the code above.
        <>
          <button type="submit" onClick={() => setConfirmDelete(true)}>
            Delete
          </button>
          {!confirmEdit && ( //If confirmEdit is true (initial state false) and the button is clicked, then we will set the confirmedit to true.
            <button type="button" onClick={() => setConfirmEdit(true)}>
              Edit
            </button>
          )}
          {confirmEdit && ( //If confirmEdit is false, then we wil show the form with the same values of the card(FormKeys)
            // The onsubmit will save the values, and we will set the confirm edit to false.
            //If the cancel button is clicked, the confirm edit will change to false, nothing happens.
            // && means render. If the condition applies.
            <>
              <ColorForm
                formKeys={color}
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
