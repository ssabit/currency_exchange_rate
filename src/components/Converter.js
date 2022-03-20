import  './Converter.css'
import 'react-dropdown/style.css';
import Dropdown from 'react-dropdown';
import { HiSwitchHorizontal } from 'react-icons/hi';

function Converter({currencyCode,input,convert,flip,setInput,setFrom,setTo,from,to,output,current_date}) {
    
  return (
    <div className="converter">
       <div className="heading">
        <h1>Currency Exchange Rate</h1>
      </div>
      <div className="container">
        <div className="left">
          <h4>Amount</h4>
          <input type="text" 
             placeholder="Enter the amount" 
             onChange={(e) => setInput(e.target.value)} />
        </div>
        <div className="middle">
          <h3>From</h3>
          <Dropdown options={currencyCode} 
                    onChange={(e) => { setFrom(e.value) }}
          value={from} placeholder="From" />
        </div>
        <div className="switch">
          <HiSwitchHorizontal size="30px" 
                        onClick={() => { flip()}}/>
        </div>
        <div className="right">
          <h3>To</h3>
          <Dropdown options={currencyCode} 
                    onChange={(e) => {setTo(e.value)}} 
          value={to} placeholder="To" />
        </div>
      </div>
      <div className="result">
        <button onClick={()=>{convert()}}>Convert</button>
        <h2>Converted Amount:</h2>
        <p>{input+" "+from.toUpperCase()+" = "+output.toFixed(2) + " " + to.toUpperCase()}</p>
  
      </div>
      <div className="date">
        <h2>Rates On: {current_date}</h2>
      </div>
       
  </div>
  )
}
export default Converter;
