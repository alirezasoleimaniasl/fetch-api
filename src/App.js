import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react"

function App() {
  const[price,SetPrice] = useState(null);
  const[isLoading,SetIsLoading] = useState(true);
const[error,SetError] = useState(null);

  useEffect(() => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice/SD.json")
    .then((response) => {
      if(!response.ok) throw "Wrong Address";
      else
      response.json().then((data) => {
      SetPrice(data.bpi.USD.rate);
      SetIsLoading(false);
    });
  })
  .catch((e) =>{
    console.log(e);
    SetError(e);
    SetIsLoading(false);
  });
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        </a>
        <div>
          {error && <h1>{error}</h1>}
          {isLoading && <h1>IS LOAING...</h1>}
          <h1>{price}</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
