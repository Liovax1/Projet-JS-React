import React from 'react';
import CocktailCard from './CocktailCard';

const ListeCocktails = ({ cocktails }) => {
    return (
        <div className="cocktail-list-container">
            <br></br>
            <h1>Listes des Cocktails</h1>
            <div className="cocktail-list">
                {cocktails.map((cocktail, index) => (
                    index % 2 === 0 ? (
                        <div key={index} className="cocktail-pair">
                            <CocktailCard key={cocktails[index].idDrink} cocktail={cocktails[index]} />
                            {cocktails[index + 1] && <CocktailCard key={cocktails[index + 1].idDrink} cocktail={cocktails[index + 1]} />}
                        </div>
                    ) : null
                ))}
            </div>
        </div>
    );
}

export default ListeCocktails;