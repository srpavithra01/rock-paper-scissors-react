import React from 'react'
import "./Rules.css"

const Rules = (props) => {
  return (
    <div className='Rules'>
        <div>
            <h2>Rules</h2>
            <img src="./icon-close.svg" alt="" onClick={props.updateRule} />
        </div>
        <img src="./image-rules.svg" alt="" />
    </div>
  )
}

export default Rules