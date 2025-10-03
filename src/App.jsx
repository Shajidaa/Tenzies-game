
import { useState } from 'react'
import './App.css'
import Die from './Components/Die'
import { nanoid } from 'nanoid';
import ReactConfetti from 'react-confetti';


function App() {
const [dice,setDice]=useState(()=>generateAllNewDice());
function generateAllNewDice(){
  return new Array (10)
  .fill(0)
  .map(()=>({value:Math.ceil(Math.random()*6),
               isHeld: false,
                id:nanoid()})
    )
}
//win the game 

const gameWon=  dice.every(die=>die.isHeld)&&
                dice.every(die=>die.value === dice[0].value)




const rollDice=()=>{
  if (gameWon) {

    setDice(generateAllNewDice())

  }else{
 setDice(oldDice=>oldDice.map(die=>
    die.isHeld?
    die:
    {...die,
      value:Math.ceil(Math.random()*6)}
  ))
  }
 
}

const hold=(id)=>{
  // console.log('click');
  // console.log(id);
  
  setDice(oldDice=>oldDice.map(die=>
    // console.log(die.id)
    
             die.id === id ?
              {...die,
              isHeld: !die.isHeld} :
             die
  ))
}

const diceElements=dice.map(dieObj=><Die
  value={dieObj.value}
     key={dieObj.id}
     isHeld={dieObj.isHeld}
     hold={()=>{
      if (!gameWon) {
        hold(dieObj.id)
      }
      }}
     ></Die>)


  return (
    <main className=' max-w-[400px] max-h-[400px] mx-auto' >
        <div className='flex  flex-col 
      justify-center  
       items-center min-h-dvh' >
     {gameWon?( <ReactConfetti  ></ReactConfetti>):''}
        <h1 className='text-2xl font-bold'>Tenzies</h1>
        <p className='text-xl text-center font-normal'>Roll until all dice are the same.
           Click each die to freeze it at its current value between rolls.</p>
    <div className='dice-container grid grid-cols-5  gap-4 p-5'>
     {diceElements}
    </div>
    <div >
      <button onClick={rollDice}
       className='p-3
      rounded font-bold bg-blue-600
       text-white'>{ gameWon?"New Game" : "Roll"}</button>

      {/* <p className={`text-xl  `}>
        {
        gameWon?  alert ("You won the game"):('keep Rolling  ')
       }
        
        </p>  */}
       
    </div>
        </div>
   
    </main> 
  )
}

export default App
