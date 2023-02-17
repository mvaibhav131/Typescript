import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Todos } from './component/Todos';

function App() {
  const [count, setCount] = useState(0);
  const heading:string="Learn Typescripts";

  return (
    <div className="App">
      <div>
        <h3>Heading  : {heading} </h3>
        <Todos/>
       </div>
    </div>
  )
}

export default App
