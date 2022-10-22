import { useState } from 'react';
import reactLogo from '../assets/react.svg';
const Home = () => {

    const [count, setCount] = useState(0);
    // Hooks useState
    const [estado, setEstado] = useState(false);
    let nombre = "IVAN CASTRO RUIZ"
    const handletSubmit = () => {
      console.log("Hacer visible el mensaje");
      setEstado(!estado);
    };

  return (
    <div className="App">
        <p><strong>Aprendiendo ReactJS - {nombre}</strong></p>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <button
          onClick = {handletSubmit}
        >
            Mostar h1
        </button>

        {/* Operador ternario */}
        {
          estado 
                ?
                <h1>Vite + React</h1>
                : 
                <h1>............</h1>
        }

        
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
    </div>
  )
}

export default Home