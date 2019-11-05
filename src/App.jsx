import React, { useState, useEffect } from "react";
import { Button, Container } from "semantic-ui-react";
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
    <Container className="App">
      <Container style={{ width: 600, margin: "auto" }}>
        <h2>Not to do list</h2>
        {masterList.length === 0 ? (
          <div>To get started, add something you never want to do again!</div>
        ) : (
          <Container>
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
          </Container>
        )}
        <Container
          style={{ display: "flex", justifyContent: "center", marginTop: 20 }}
        >
          <form onSubmit={e => e.preventDefault()}>
            <input
              type="input"
              value={inputText}
              onChange={e => handleChange(e.target.value)}
            />
            <Button
              primary
              style={{ marginLeft: 5 }}
              onClick={() => handleAddItem({ title: inputText })}
            >
              Add new
            </Button>
          </form>
        </Container>
      </Container>
    </Container>
  );
}

export default App;
