import React, { useState, useEffect } from "react";
import "./App.css";
import ListItem from "./ListItem.jsx";

function App() {
  const [inputText, setInputText] = useState("");
  const [masterList, setMasterList] = useState([]);
  let [key, setKey] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(res => setMasterList(res.filter(item => item.id < 10)));
  }, []);

  console.log("masterList", masterList);

  const handleAddItem = newItem => {
    newItem.key = key;
    setMasterList([...masterList, newItem]);
    setInputText("");
    setKey(key + 1);
  };

  const handleChange = text => {
    setInputText(text);
  };

  const handleUpdate = (oldItem, newItem) => {
    let newList = [...masterList];
    let updatedItem = {
      ...oldItem,
      ...newItem
    };

    let index = masterList.findIndex(item => item.key === updatedItem.key);
    newList.splice(index, 1, updatedItem);
    setMasterList(newList);
  };

  const handleRemove = removeItem => {
    let newMasterList = masterList.filter(
      item => item.title !== removeItem.title
    );
    setMasterList(newMasterList);
  };

  return (
    <div className="App">
      <div className="card" style={{ width: 600, margin: "auto" }}>
        <h3 className="card-title">Not to do list</h3>
        {masterList.length === 0 ? (
          <div>To get started, add something you never want to do again!</div>
        ) : (
          <div className="card-text">
            {masterList.map(item => (
              <ListItem
                item={item}
                handleRemove={handleRemove}
                handleAddItem={handleAddItem}
                handleChange={handleChange}
                handleUpdate={handleUpdate}
                key={item.key}
              />
            ))}
          </div>
        )}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <form onSubmit={e => e.preventDefault()}>
            <input
              type="input"
              value={inputText}
              onChange={e => handleChange(e.target.value)}
            />
            <button
              className="btn btn-primary btn-sm"
              onClick={() => handleAddItem({ title: inputText })}
            >
              Add new
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
