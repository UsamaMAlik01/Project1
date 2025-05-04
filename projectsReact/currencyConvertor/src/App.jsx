import useApi from './useApi'
import Input from './components/Input'
import { useState } from 'react'

function App() {
  const [amount, setAmount] = useState(null)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('pkr')
  const [convertedAmount, setConvertedAmount] = useState(0)
  const apiData = useApi(from)
   
  const currencyOptions = Object.keys(apiData)
  console.log(apiData[to])

 
  
  const swap = () =>{
    setFrom(to)
    setTo(from)        
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const handleConversion = () => {
    if(amount > 0){
      setConvertedAmount(amount * apiData[to])
    }
  }

  

 
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.search.yahoo.com/search/images;_ylt=AwrjIrhXYu9nCAIA07NXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Nj?type=E210US91215G0&p=bg+image&fr=mcafee&th=266&tw=474&imgurl=https%3A%2F%2Fwww.vmcdn.ca%2Ff%2Ffiles%2Frwcpulse%2Fimages%2Fredwoodcitypulse%2Fphoto-of-the-day%2Fgettyimages-1623303770.jpg%3Bw%3D960&rurl=https%3A%2F%2Fwww.rwcpulse.com%2Fgood-morning%2Fgood-morning-christmas-2023-8027224&size=80KB&name=Good+morning%2C+Christmas+2023+-+Redwood+City+Pulse&oid=8&h=540&w=960&turl=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.4qPk7duAkOT5H1lVKHEgagHaEK%26pid%3DApi&tt=Good+morning%2C+Christmas+2023+-+Redwood+City+Pulse&sigr=GlHScPxBM345&sigit=A13xl5uwt7Pp&sigi=joyoinKTdBSc&sign=Q2snAmznm7Yo&sigt=Q2snAmznm7Yo')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleConversion();
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <Input
                            label="From"
                            amount={amount}
                            defaultValue={from}
                            currencyOptions={currencyOptions}
                            onChangeAmount={(amount) => setAmount(amount)}
                            onChangeCurrency={(currency) => setFrom(currency)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <Input
                           label="TO"
                           amount={convertedAmount}
                           defaultValue={to}
                           currencyOptions={currencyOptions}
                           onChangeAmount={(amount) => setAmount(amount)}
                           onChangeCurrency={(currency) => setTo(currency)}
                            amountDisabled={true}
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
)
}

export default App;