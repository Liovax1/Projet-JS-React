import React from "react";

const CocktailCard = ({ cocktail }) => {
    return (
        <div className="cocktail-card">
            <h2>{cocktail.strDrink}</h2>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="cocktail-image" />
            {cocktail.strInstructions && <p>{cocktail.strInstructions}</p>} {/* On affiche les instructions si elles existent */}
            {cocktail.strIngredient1 && (
                <ul>
                    {Object.keys(cocktail).filter(key => key.startsWith('strIngredient') && cocktail[key]).map(key => (
                        <li key={key}>{cocktail[key]} - {cocktail[`strMeasure${key.slice(13)}`]}</li> // On affiche les ingrédients et les mesures
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CocktailCard;