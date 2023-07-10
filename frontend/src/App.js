import React, { useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [serverMsg, setServerMsg] = useState("n/a")

  useEffect(() => {
    fetch("/api/a")
      .then(res => res.json())
      .then(
        (result) => {
          setServerMsg(JSON.stringify(result))
        },
        (error) => {
          console.log(error)
        }
      )
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4>Server message: <span>{serverMsg}</span></h4>
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
