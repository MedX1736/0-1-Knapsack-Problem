import React, { useState } from "react";
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
    console.log(valueOptim);
  }


  return (
    <div>
      <Header onSolve={onSolve} />
      <CreateArea onAdd={addItem} />
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
      {/* {console.log(chosen)} */}
      <Footer />
    </div>
  );
}

export default App;
