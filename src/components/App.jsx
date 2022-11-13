import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useSelector } from "react-redux";
import knapsackSolve from "../knapsack";




function App() {
  const item1 = { name: 'Hlib', weight: 3, value: 2 };
  const item2 = { name: 'Schweppes', weight: 4, value: 3 };
  const item3 = { name: 'Candia', weight: 5, value: 4 };
  const item4 = { name: 'IDK', weight: 6, value: 1 };
  const [items, setItems] = useState([item1, item2, item3, item4]);
  const [chosen, setChosen] = useState([]);
  const [valueOptim, setOptim] = useState(0);
  function compare(a, b) {
    if (a.weight < b.weight) {
      return -1;
    }
    if (a.weight > b.weight) {
      return 1;
    }
    return 0;
  }
  function addItem(newItem) {
    setItems(prevItems => {
      var temp = [...prevItems, newItem];
      temp.sort(compare);
      return temp;
    });
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  const maxWeight = useSelector(state => state.weight);
  function onSolve() {
    const { chosen, valueOptim } = knapsackSolve(items, maxWeight);
    setChosen(chosen);
    setOptim(valueOptim);
  }
  useEffect(()=>{
    setChosen([])
  },[items,maxWeight])

  return (
    <div>
      <Header onSolve={onSolve} value={chosen.length == 0 ? "Résoudre": `Valeur : ${valueOptim}` }  />
      <CreateArea onAdd={addItem} />
      {
        items.length == 0 && (
          <div>
          <div style={{width : '500px',margin:'auto',textAlign:'center',opacity:'50%'}}>
            <img src='box.png' style={{width : '100px',marginTop:'100px'}}/>
            <h3 style={{marginTop:'30px',color:'#000'}} >Il n'y a aucun élèment pour l'instant.</h3>
          </div>
          </div>
        ) 
      }
      {items.map((item, index) => {
        console.log(chosen[index] === 1)
        return (
          <Note
            key={index}
            id={index}
            name={item.name}
            weight={item.weight}
            value={item.value}
            onDelete={deleteItem}
            selected={chosen[index] === 1}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
