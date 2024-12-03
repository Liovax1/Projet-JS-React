import React, { useEffect, useState } from 'react'; // On importe useEffect et useState depuis 'react'

const AleatoireCocktail = () => { // On crée notre composant AleatoireCocktail
    const [cocktail, setCocktail] = useState(null); // On crée un état cocktail avec la fonction setCocktail pour le modifier

    useEffect(() => { //
        fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php') // On utilise fetch() pour récupérer les données de l'API
        .then(response => response.json()) // On transforme la réponse en JSON
        .then(data => setCocktail(data.drinks[0])) // On stocke le cocktail dans l'état cocktail
    }, []); // Tabeleau vide pour eviter les boucles infinies

    if (!cocktail) return <div>Chargement...</div>; // Message de chargement

    return (
        <div className="cocktail-list-container">
            <br></br>
            <h1>Cocktail Aléatoire</h1> {/* notre titre */}
            <h2>{cocktail.strDrink}</h2> {/* le nom du cocktail */}
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="cocktail-image" /> {/* l'image du cocktail */}
            <p>{cocktail.strInstructions}</p> {/* les instructions */}
            <ul>
                {Object.keys(cocktail).filter(key => key.startsWith('strIngredient') && cocktail[key]).map(key => ( // On filtre les ingrédients
                    <li key={key}>{cocktail[key]} - {cocktail[`strMeasure${key.slice(13)}`]}</li> // On affiche les ingrédients et les mesures
                ))}
            </ul>
        </div>
    );
}

export default AleatoireCocktail;