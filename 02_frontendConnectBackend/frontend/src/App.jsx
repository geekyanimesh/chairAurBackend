import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    axios.get("/api/characters")
      .then((response) => {
        setChars(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Connect Frontend to Backend</h1>
      <p>CHARACTERS: {chars.length}</p>

      {
        chars.map((char) => (
          <div key={char.name}>
            <h3>{char.name}</h3>
            <p>{char.email}</p>
          </div>
        ))
      }
    </>
  );
}

export default App;

// 30:00