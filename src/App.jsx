import React from 'react'
import Counter from './components/Counter'
import ToDoList from './components/ToDoList'
import Accordian from './components/Accordian'
import StopWatch  from './components/StopWatch'
import SwitchTab from './components/SwitchTab'
import Contact from './components/Contact'
import Forms from './components/Forms'

const App = () => {
  return (
    <div>
      <Counter/>
      <ToDoList/>
      <Accordian/>
      <StopWatch/>
      <SwitchTab/>
      <Contact/>
      <Forms/>
    </div>
  )
}

export default App
