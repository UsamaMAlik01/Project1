import {useId} from 'react'

function Input({
    label,
    amount,
    onChangeAmount,
    currencyOptions=[],
    defaultValue="usd",
    onChangeCurrency,
    amountDisabled=false,
    currencyDisabled=false,    
    
    className = "",
}) 

{
    const amountId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-1/2">
                <label  htmlFor={amountId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    disabled={amountDisabled}
                    onChange={(e) => onChangeAmount && onChangeAmount(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={defaultValue}
                    onChange={(e) => onChangeCurrency && onChangeCurrency(e.target.value)}
                    
                    disabled={currencyDisabled}
             >
                    
                       {currencyOptions.map((currency) => (
                         <option key={currency} value={currency}>
                         {currency}
                     </option>
                       ))}
                
                </select>
            </div>
        </div>
    );
}

export default Input;
