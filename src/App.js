import logo from './logo.svg';
import bitLogo from './bitcoin.png';
import './App.css';
import {useState,useEffect} from "react"
import useFetch from './useFetch';

function App() {
  
  const{price,isLoading,error} = useFetch();

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <div>
          <img src={bitLogo} className="bit-logo" alt="bitcoin logo"></img>
          {error && <h1>{error}</h1>}
          {isLoading && <h1>IS LOADING...</h1>}
          <h1>{price}</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
