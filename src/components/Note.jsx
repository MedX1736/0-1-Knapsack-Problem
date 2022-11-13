import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note" style={{ backgroundColor: props.selected ? '#BF720D' : '#fff', color: props.selected ? '#fff' : '#000' }}>
      <h1 >{props.name}</h1>
      <p>{props.weight} Kg</p>
      <p>{props.value} $</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
