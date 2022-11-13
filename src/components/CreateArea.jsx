import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import InputSlider from "./Slider";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [item, setItem] = useState({
    name: "",
    weight : "" , 
    value: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setItem(prevItem => {
      return {
        ...prevItem,
        [name]: name == 'name' ? value : Number(value)
      };
    });
  }

  function submitItem(event) {
    props.onAdd(item);
    setItem({
      name: "",
      weight : "" , 
      value: "",
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
      <textarea
          name="name"
          onClick={expand}
          onChange={handleChange}
          value={item.name}
          placeholder="Ajouter un nouvel element..."
          rows={1}
        />
        
        {isExpanded && (
          <div style={{display:'flex', alignItems : 'center'}}>
          <input
            name="weight"
            onChange={handleChange}
            value={item.weight}
            placeholder="Poids"
          />
          <span style={{color : 'grey'}}>Kg</span>
          </div>
        )}

        
        {isExpanded && (
          <div style={{display:'flex', alignItems : 'center'}}>
          <input
            name="value"
            onChange={handleChange}
            value={item.value}
            placeholder="Valeur"
          />
          <span style={{color : 'grey'}}>$</span>
          </div>
        )}
        
        
        <Zoom in={isExpanded}>
          <Fab onClick={submitItem}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
