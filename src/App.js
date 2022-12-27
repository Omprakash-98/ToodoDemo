
import { useState } from 'react';
import './App.css';
import Toodolist from './Toodolist';

function App() {
  const [title, setTitle] = useState("");
  const [list, setListdata] = useState([]);

// Add Item //
  const handleAdd = () => {
    if (title.length === 0) {
      alert("please enter valid data")
    } else {
      setListdata((preval) => {
        return [...preval, title]
      })
    }
    setTitle(" ")
  }

  // delete list //
  const handleDlt = (id) => {
    setListdata((preval) => {
      return preval.filter((array, index) => {
        return index !== id
      })
    })
  }

  return (

    <div className='mainContainer'>
      <div id="myDIV" className="header">
        <h2 style={{ margin: "5px" }}>My To Do List</h2>
        <input type="text" placeholder="Title..."
          name='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button onClick={handleAdd} className="addBtn" style={{ borderRadius: "50%" }}>add </button>
      </div>
      {/* TooDo list data */}
      <div className='itemcontainer'>
        <h1 >Items</h1>
        <ul id="myUL" className="datalist">
          {
            list.map((item, index) =>
              <Toodolist
                key={index}
                id={index}
                text={item}
                handleDlt={handleDlt} />
            )}
        </ul>
      </div>
    </div>
  );
}

export default App;
