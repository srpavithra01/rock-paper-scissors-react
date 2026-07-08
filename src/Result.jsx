import React from 'react'
import "./Result.css"

const Result = (props) => {
  let computerPic = Math.floor(Math.random()*3)
  console.log(computerPic);

  let {selectState,storage}=props

  let win = "YOU LOOSE :("
  if((selectState.value=="rock" && storage[computerPic].value=="scissors")||
      (selectState.value=="scissor" && storage[computerPic].value=="paper")||
      (selectState.value=="paper" && storage[computerPic].value=="rock"))
    {
      win= "YOU WIN :)"
    }
    else if(selectState.value==storage[computerPic].value){
      win= "DRAW :("
    } else{
      win= "YOU LOOSE :("
    }
  
  return (
    <div className='Result'>
        <section>
        <div>
            <h3>YOU PICKED</h3>
            <article className='resArt1'>
            <img src={props.selectState.path} alt="" />
            </article>
        </div>
        <div>
            <h1>{win}</h1>
            <button onClick={()=>{
              props.setSelect(null)
              if(win=="YOU WIN :)"){
              props.setScore(props.score+1)
              }
            }}>PLAY AGAIN</button>
        </div>
        <div>
            <h3>THE HOUSE PICKED</h3>
              <article className='resArt2'>
            <img src={props.storage[computerPic].path} alt="" />
            </article>
        </div>
        </section>
     </div>
    
  )
}

export default Result