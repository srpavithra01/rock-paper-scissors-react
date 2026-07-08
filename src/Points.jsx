import React from 'react'
import "./Points.css"

const Points = (props) => {
  return (
    <div className='Points'>
        <nav>
            <div>
                <img src="./logo.svg" alt="" />
            </div>
            <div className='score'>
                <h4>SCORE</h4>
                <h3>{props.score}</h3>
            </div>
        </nav>
    </div>
  )
}

export default Points