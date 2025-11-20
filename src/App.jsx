import React from 'react'
import Counter from './components/Counter'
import ToDoList from './components/ToDoList'
import Accordian from './components/Accordian'
import StopWatch  from './components/StopWatch'

const App = () => {
  return (
    <div>
      <Counter/>
      <ToDoList/>
      <Accordian/>
      <StopWatch/>
    </div>
  )
}

export default App
