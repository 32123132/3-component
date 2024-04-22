import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Start } from './Components/CountDownTimer'
import './App.module.css'
import { List } from './Components/UserList'
import { Window } from './Components/WindowSize'
export function App() {


  return (
    <>
      <Start/>
      <List/>
      <Window/>
    </>
  )
}


