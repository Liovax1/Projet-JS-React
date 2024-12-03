import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header'
import Footer from './footer'
import ListeCocktails from './ListeCocktails'
import AleatoireCocktail from './AleatoireCocktail'

function App() {
  return (
    <>
      <Header />
      <main>
        <h1>Projet React</h1>
        <ListeCocktails />
        <AleatoireCocktail />
      </main>
      <Footer />
    </>
  )
}

export default App
