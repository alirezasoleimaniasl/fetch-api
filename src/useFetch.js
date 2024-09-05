import {useState,useEffect} from "react"

const useFetch = () => {
  const[price,SetPrice] = useState(null);
  const[isLoading,SetIsLoading] = useState(true);
  const[error,SetError] = useState(null);

    useEffect(() => {
        fetch("https://api.coindesk.com/v1/bpi/currentprice/USD.json")
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

      return{price,isLoading,error}
}
export default useFetch