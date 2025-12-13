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
import DarkMode  from './components/DarkMode'
import { ThemeProvider } from './contextApi/ThemeContext'
import Body from './components/Body'
import { Provider } from 'react-redux'
import appStore from './store/appStore'
import BlogContent from './components/BlogContent'
import Authentication from './components/Authentication'
import CounterStore from './components/CounterStore'
import ProgressBar from './components/ProgressBar'
import GuessTheNumber from './components/GuessTheNumber'
import CounterApp from './components/CounterApp'
import Progress from './components/Progress'
import ValidationForm from './components/ValidationForm'
import NumberChecker from './components/NumberChecker'

const App = () => {
  return (

    <Provider store = {appStore} >
    

    <ThemeProvider>
       <div>
        <DarkMode/>
        <Header/>
      
      <Routes>
        <Route path='/' element        = {<Home/>}/>
        <Route path ='/about' element   = {<About/>}/>
        <Route path = '/contact' element = {<Connect/>} />
      </Routes>
     < NumberChecker/>
      <ProgressBar/>
      <Progress/>
      <CounterApp/>
      <GuessTheNumber/>
      <CounterStore/>
      <Authentication/>
      <Counter/>
      <ToDoList/>
      <Accordian/>
      <StopWatch/>
      <SwitchTab/>
      <Contact/>
      <ValidationForm/>

     <Body/>
      <BlogContent/>
    </div>
    </ThemeProvider>
    </Provider>

   
   
  )
}

export default App
