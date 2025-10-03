
import { useState } from 'react'
import './App.css'
import Die from './Components/Die'

function App() {
const [dice,setDice]=useState(()=>generateAllNewDice());
function generateAllNewDice(){
  return new Array (10)
  .fill(0)
  .map(()=>Math.ceil(Math.random()*6))
}
const diceElements=dice.map(num=><Die value=
  {num}></Die>)
// for (let i = 0; i < dice.length; i++) {
//   const diceElements=
// }
const rollDice=()=>{
  setDice(generateAllNewDice())
}
  return (
    <main className='flex  flex-col 
      justify-center 
       items-center' >
    <div className='dice-container grid grid-cols-5  gap-4 p-5'>
     {diceElements}
    </div>
    <div >
      <button onClick={rollDice}
       className='p-3
      rounded font-bold bg-blue-600 text-white'>Roll</button>
    </div>
    </main> 
  )
}

export default App
