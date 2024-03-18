import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState(0);
  const [star, setStar] = useState([]);
  let arrayStar = [];
 
  function handleSubmit(rows) {
    for (let i = 1; i <= rows; i++) {
      let starString = "";
      for (let j = 1; j <= i; j++) {
        starString += "*";
      }
      arrayStar.push(starString)
    }
  
    for (let i = rows - 1; i > 0; i--) {
      let starString = "";
      for (let j = 1; j <= i; j++) {
        starString += "*";
      }
      arrayStar.push(starString) 
    }
    setStar(arrayStar)
  }

  return (
    <>
      Input:
      <input
        type='number'
        style={{ margin: 8 }}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => handleSubmit(inputValue)}>Submit</button>
      {star.map(item => (
        <p>{item}</p>
      ))}
    </>
  );
}

export default App;
