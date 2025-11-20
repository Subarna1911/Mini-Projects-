import React from 'react'
import Counter from './components/Counter'
import ToDoList from './components/ToDoList'
import Accordian from './components/Accordian'
import StopWatch  from './components/StopWatch'
import SwitchTab from './components/SwitchTab'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <Counter/>
      <ToDoList/>
      <Accordian/>
      <StopWatch/>
      <SwitchTab/>
      <Contact/>
    </div>
  )
}

export default App
