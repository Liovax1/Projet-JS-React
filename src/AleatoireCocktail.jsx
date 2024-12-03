import React, { useEffect, useState } from 'react';

const AleatoireCocktail = () => {
    const [cocktail, setCocktail] = useState(null);

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(response => response.json())
        .then(data => setCocktail(data.drinks[0]))
    }, []);

    if (!cocktail) return <div>Chargement...</div>;

    return (
        <div>
            <h1>Cocktail Aléatoire</h1>
            <h2>{cocktail.strDrink}</h2>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <p>{cocktail.strInstructions}</p>
            <ul>
                {Object.keys(cocktail).filter(key => key.startsWith('strIngredient') && cocktail[key]).map(key => (
                    <li key={key}>{cocktail[key]} - {cocktail[`strMeasure${key.slice(13)}`]}</li>
                ))}
            </ul>
        </div>
    );
}

export default AleatoireCocktail;