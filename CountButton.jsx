import { useState, useEffect } from "react"

export default function CountButton( {incrementAmount} ) {
    let [count, setCount] = useState(0)
    function handleClick() {
        setCount(count + incrementAmount)
    }
    function rollOverCount() {
        if (count > 10) {
            setCount(0)
        }
    }
    useEffect(rollOverCount, [count])
    return (
      <div>
      <button onClick={handleClick}>+{incrementAmount}</button>
      <div>{count}</div>
      </div>
    )
  }