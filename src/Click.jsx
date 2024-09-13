
import { useState } from "react"

import './style.css'
export default function Click() {
const [num1, setNum1] = useState();
const [num2, setNum2] = useState();
const [result, setResult] = useState();

  return (
    <div>
      <h2 result='result'>Результат: {result}</h2>
    <input type="number" onChange={(e) =>setNum1(e.target.value)} />
    <input type="number" onChange={(e) =>setNum2(e.target.value)} />
    <button onClick={() => {setResult(num1 + num2)}}>+</button>
    <button onClick={() => {setResult(num1 - num2)}}>-</button>
    <button onClick={() => {setResult(num1 * num2)}}>*</button>
    <button onClick={() => {setResult(num1 / num2)}}>/</button>
    <button onClick={() => {setResult(num1 ** num2)}}>**</button>
    </div>
  )
}

