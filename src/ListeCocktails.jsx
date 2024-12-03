import React, { useEffect, useState } from 'react';

const ListeCocktails = () => {
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
        .then(response => response.json())
        .then(data => setCocktails(data.drinks.slice(0, 10))) // Limiter à 10 cocktails
        }, []);
        return (
            <div>
                <h1>Cocktails</h1>
                <div>
                    {cocktails.map(cocktail => (
                        <div key={cocktail.idDrink}>
                            <h2>{cocktail.strDrink}</h2>
                            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                        </div>
                    ))}
                </div>
            </div>
        );
}

export default ListeCocktails;