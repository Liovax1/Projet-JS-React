import React from "react";
import CocktailCard from './CocktailCard';

const TousLesCocktails = ({ cocktails }) => {
    return (
        <div className="cocktail-list-container">
            <h1>Tous les Cocktails</h1>
            <div className="cocktail-list">
                {cocktails.map((cocktail) => (
                    <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
                ))}
            </div>
        </div>
    );
}

export default TousLesCocktails;