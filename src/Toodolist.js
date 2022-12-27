import React from 'react'

function Toodolist(props) {
  return (
    <div key={props.id}>
    <li> <button className='deltbtn' onClick={()=>props.handleDlt(props.id)}>-</button> {props.text}</li>
    </div>
  )
}

export default Toodolist