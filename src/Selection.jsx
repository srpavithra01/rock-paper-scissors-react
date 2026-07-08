import React from 'react'
import "./Selection.css"

const Selection = (props) => {
  return (
    <div className='Selection'>
      <div>
      {/* <article className='art1'>
        <img src="./icon-paper.svg" alt="" />
      </article>
      <article className='art2'>
        <img src="./icon-scissors.svg" alt="" />
      </article>
      <article className='art3'>
        <img src="./icon-rock.svg" alt="" />
      </article> */}
      {props.storage.map((e,i)=>{
        return <article className={`art${i+1}`}>
            <img src={e.path} alt="" onClick={()=>{props.setSelect(e)}}/>
          </article>
        })
      }
      
      
      </div>
    </div>
  )
}

export default Selection