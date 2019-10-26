import React, { useState } from 'react';
import './App.css';
import ListItem from './ListItem.jsx';

function App() {
  const [inputText, setInputText] = useState('');
  const [masterList, setMasterList] = useState([]);
 
  const handleSave = (newItem) => {
    setMasterList(prevState => [...prevState, newItem])
    setInputText('');
  }

  const handleChange = (text) => {
    setInputText(text);
  }

  const handleRemove = (removeItem) => {
    let newMasterList = masterList.filter(item => item !== removeItem )
    setMasterList(newMasterList);
  }
  return (
    <div className="App">
      <div className="card" style={{ width: 400, margin: 'auto' }}>
        <div className="card-title">Not to do list</div>
        {masterList.length === 0 ? <div>To get started, add something you never want to do again!</div> :
          <div className="card-text">{masterList.map(item => <ListItem key={item} itemText={item} handleRemove={handleRemove}/>)}</div>
        }
        <div style={{ display: 'flex', justifyContent: 'center' }}><input type="input" value={inputText} onChange={e => handleChange(e.target.value)}/><button onClick={() => handleSave(inputText)}>Add new</button></div>
      </div>
    </div>
  );
}

export default App;
