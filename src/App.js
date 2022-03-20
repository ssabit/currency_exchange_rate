import Axios from 'axios';
import Converter from './components/Converter';
import React, { useEffect, useState } from "react";

function App() {

 const [info, setInfo] = useState([]);
 const [input, setInput] = useState(0);
 const [from, setFrom] = useState("usd");
 const [to, setTo] = useState("bdt");
 const [currencyCode, setCurrencyCode] = useState([]);
 const [output, setOutput] = useState(0);
 const today = new Date();
 const current_date = today.getDate()+' '+(today.toLocaleString('default', { month: 'long' }))+' '+(today.getFullYear());

 useEffect(() => {
  Axios.get(
`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
  .then((res) => {
     setInfo(res.data[from]);
   })
 }, [from]);

 
 useEffect(() => {
  setCurrencyCode(Object.keys(info));
   convert();
 }, [info])


 function convert() {
   var rate = info[to];
   setOutput(input * rate);
 }
 
 function flip() {
   var temp = from;
   setFrom(to);
   setTo(temp);
 }

  return (
    <div className="App">
     
     <Converter 

    currencyCode={currencyCode} 
     input={input} 
     flip={flip} 
     convert={convert} 
     setInfo={setInfo} 
     setInput={setInput} 
     setFrom={setFrom} 
     setTo={setTo} 
     from={from} 
     to={to} 
     output={output} 
     current_date={current_date} 
     
     />

    </div>
  );
}

export default App;
