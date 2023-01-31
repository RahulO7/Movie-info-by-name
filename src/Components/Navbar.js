import React from 'react'

export default function Navbar(props) {
  return (
    <div>
      <input type="text" value={props.input} onChange = {(e)=>props.setInput(e.target.value)} />
      <input type="submit"  onClick={props.search}/>
     </div>
  )
}

