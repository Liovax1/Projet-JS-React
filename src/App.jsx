import { useState, useEffect } from 'react';
import './App.css';
import Header from './header';
import Footer from './footer';
import ListeCocktails from './ListeCocktails';
import AleatoireCocktail from './AleatoireCocktail';
import RecuperationCocktails from './RecuperationCocktails';

function App() { 
  const userName = 'Liova';
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
      .then(response => response.json())
      .then(data => setCocktails(data.drinks));
  }, []);

  return (
    <>
      <Header userName={userName} />
      <main>
        <h1>TP React Cocktails</h1>
        <ListeCocktails cocktails={cocktails.slice(0, 10)} /> {/* Passer les 10 premiers cocktails en props */}
        <AleatoireCocktail />
        <RecuperationCocktails cocktails={cocktails} /> {/* Passer tous les cocktails en props */}
      </main>
      <Footer userName={userName}/>
    </>
  );
}

export default App;
