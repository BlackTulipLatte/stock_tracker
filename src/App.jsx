import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([]);

  useEffect(() =>{
    fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo')
    .then(response => response.json())
    .then(data => {setData(data); console.log(data);});
  },[]);

  return (
    <>
      <h1>Stock Prices</h1>  
    </>
  )
}

export default App
