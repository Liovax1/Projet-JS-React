import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header' // On importe le composant Header
import Footer from './footer' // On importe le composant Footer
import ListeCocktails from './ListeCocktails' // On importe le composant ListeCocktails
import AleatoireCocktail from './AleatoireCocktail' // On importe le composant AleatoireCocktail

function App() { 
  return (
    <> {/* On retourne plusieurs éléments, c'est une div fantôme */}
      <Header /> {/* On affiche le composant Header */}
      <main>
        <h1>TP React Cocktails</h1> {/* On affiche le titre */}
        <ListeCocktails /> {/* On affiche le composant ListeCocktails */}
        <AleatoireCocktail /> {/* On affiche le composant AleatoireCocktail */}
      </main>
      <Footer /> {/* On affiche le composant Footer */}
    </>
  )
}

export default App
