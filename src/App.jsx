import { useState } from "react";
import useCurrencyInfo from "./api/currencyapi"
import './App.css'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from);


  const options = currencyInfo ? Object.keys(currencyInfo) : [];

  const swap = () =>{
    setTo(from)
    setFrom(to)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  
  }

  const answer = () => {
    setConvertedAmount(amount*currencyInfo[to])
  }

  return (
    <>
  <div className="w-full flex h-screen flex-wrap justify-center items-center bg-no-repeat"
  style={{backgroundImage :`url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,}} >
    <div className="w-full">
      <div className=" max-w-md mx-auto backdrop-blur-md border border-gray-600 rounded-lg p-5 bg-white/30">
      <form onSubmit={(e) => { e.preventDefault(); answer()  }}>
        <div className="w-full mb-1">
        <div className={`bg-white p-3 rounded-lg text-sm flex`}>
            <div className="w-1/2">
                <label className="text-black/40 mb-2 inline-block">
                    from
                </label>
 <input 
 value={amount}
 onChange={(E) => {
  setAmount(E.target.value)
 }}
 className="outline-none w-full bg-transparent py-1.5"  type="number"  placeholder="Amount"
   />
            </div>

           <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
      <select
      value={from}
      onChange={(e) => {
        setFrom(e.target.value);
      }}
      className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" >
                          {
                            options.map((currency) => (
                              <option value={currency} key={currency}>
                                {currency}
                              </option>
                            ))
                          }              
                </select>
            </div>
          </div>
          <div className=" relative w-full h-0.5">
            <button
            onClick={swap}
            type="button" className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 cursor-pointer border-white rounded-md bg-blue-600 text-white px-2 py-0.5 ">
            Swap</button>
          </div>

        </div>

        <div className="w-full mb-1">
        <div className={`bg-white p-3 rounded-lg text-sm flex`}>
            <div className="w-1/2">
                <label className="text-black/40 mb-2 inline-block">
                    To
                </label>
 <input
  value={convertedAmount}
  disabled
  onChange={(E) => {
   setConvertedAmount(E.target.value)   
  }}
 className="outline-none w-full bg-transparent py-1.5"  type="number"  placeholder="Amount"
   />
            </div>
          
           <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
      <select
        value={to}
        onChange={(e) => {
          setTo(e.target.value);
        }}
      className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" >
      {
                            options.map((currency) => (
                              <option value={currency} key={currency}>
                                {currency}
                              </option>
                            ))
                          }                  
                </select>
            </div>
          </div>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 cursor-pointer rounded-lg mt-1.5">Convert  {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </form>
      </div>
    </div>
  </div>
    </>
  )
}

export default App
