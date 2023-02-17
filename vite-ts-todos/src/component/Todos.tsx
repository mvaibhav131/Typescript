import React, { useState } from 'react'

export const Todos = () => {
    const [text,setText]= useState("")
  return (
    <div>
        
    <div>Hello Welcome to the Todos</div>

    <input value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter Text" type="text" />
    </div>
  )
}
