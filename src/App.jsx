import {useState} from 'react'
import React from 'react'
import "./App.css"
import Points from './Points'
import Selection from './Selection'
import Result from './Result'
import Rules from './Rules'

const App = () => {
  let [ruleState, setRule]=useState(false)

  let[selectState, setSelect]=useState(null)

  let [score,setScore] = useState(0)

  function handleClick(){
    setRule(!ruleState)
  }
  let storage=[{value:"paper", path:"./icon-paper.svg"},
               {value:"scissors", path:"./icon-scissors.svg"},
               {value:"rock", path:"./icon-rock.svg"}
  ]
  return (
    <div className='App'>
     <Points score={score}></Points>
     {selectState ? <Result selectState={selectState} storage={storage} setSelect={setSelect} setScore={setScore} score={score}></Result> : <Selection storage ={storage} setSelect={setSelect}></Selection>}
    
     {/* <Result></Result> */}
     <div className='rulesBtn'>
      <button onClick={handleClick}>RULES</button>
     </div>
     {ruleState && <Rules updateRule={handleClick}></Rules>}
    </div>
  )
}

export default App