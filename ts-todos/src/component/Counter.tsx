import React, { useState } from 'react'
 
type CounterProps= {
    init:number,
    // last:number
    //
}

function Counter(props:CounterProps) {
    const {init}=props;

    const [count,setCount]= useState(init)
  return (

    <div>Counter App in TS 
        <h3>Counter:{count}</h3>
        <button onClick={() => setCount(count+1)} >Add 1</button>
        <button onClick={() => setCount(count-1)} >remove 1</button>
    </div>
  )
}

export default Counter







//diffrence between the react fragment vs div  (i,e : <></> vs <div></div>)

// the main diffrence is the div has display block property and the react fragment has no display property .
// display block means every time the new added div gives you the new lines .
// simply <></>  => Hello..Counter   and <div></div> => Hello.. 
                                                    // Counter