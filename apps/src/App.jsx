import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { SuperheroForm } from './lib/superhero-application-form'
import {EventRSVPForm} from './lib/event-rsvp-form'
import {BrowserRouter, Routes, Route} from 'react-router';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route 
      path='/superhero-app' 
      element={<SuperheroForm />}
      /> 
      <Route 
      path='/event-app'
      element={<EventRSVPForm />}
      />
    </Routes>
    </BrowserRouter>
  )
}

export default App
