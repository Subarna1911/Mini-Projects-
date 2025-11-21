import React from 'react'
import Counter from './components/Counter'
import ToDoList from './components/ToDoList'
import Accordian from './components/Accordian'
import StopWatch  from './components/StopWatch'
import SwitchTab from './components/SwitchTab'
import Contact from './components/Contact'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Connect from './pages/Connect'
import About from './pages/About'
import Header from './components/Header'


const App = () => {
  return (
    <div>
      <Header/>
      
      <Routes>
        <Route path='/' element        = {<Home/>}/>
        <Route path ='/about' element   = {<About/>}/>
        <Route path = '/contact' element = {<Connect/>} />
      </Routes>
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
