import { useState } from 'react'
import './App.css'
import useApi from './useApi'
import InputBox from './InputBox'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('pkr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const apiData = useApi(from)
  const currencyOptions = Object.keys(apiData)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const handleConversion = () => {
    if (amount > 0) {
      setConvertedAmount(amount * apiData[to])
    }
  }

  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('')`,
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          handleConversion()
                         
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount={amount}
                              onChangeAmount={(amount) => setAmount(amount)}
                              currency={from}
                              onChangeCurrency={(currency) => setFrom(currency)}
                              currenyOptions={currencyOptions}
                              AmountDisabled={false}
                              CurrencyDisabled={false}  
                              
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={swap}
                              
                          >
                              SWAP
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount={convertedAmount}
                              onChangeAmount={(amount) => setAmount(amount)}
                              currency={to}
                              onChangeCurrency={(currency) => setTo(currency)}
                              currenyOptions={currencyOptions}
                              AmountDisabled={true}
                              CurrencyDisabled={false} 
                              
                              
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                     >
                        {`Convert ${from.toUpperCase()} to ${to.toUpperCase()}`}
                      </button>
                  </form>
              </div>
          </div>
      </div>
)
}

export default App;