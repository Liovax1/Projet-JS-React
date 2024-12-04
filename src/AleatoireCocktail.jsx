import React, { useEffect, useState } from 'react';
import CocktailCard from './CocktailCard';

const AleatoireCocktail = () => {
    const [cocktail, setCocktail] = useState(null);

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(response => response.json())
        .then(data => setCocktail(data.drinks[0]))
    }, []);

    if (!cocktail) return <div>Chargement...</div>;

    return (
        <div className="cocktail-list-container">
            <br></br>
            <h1>Cocktail Aléatoire</h1>
            <CocktailCard cocktail={cocktail} /> {/* On utilise le composant CocktailCard */}
        </div>
    );
}

export default AleatoireCocktail;