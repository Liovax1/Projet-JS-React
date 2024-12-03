import React, { useEffect, useState } from 'react'; // On importe useEffect et useState depuis 'react'

const ListeCocktails = () => { // On crée le composant ListeCocktails
    const [cocktails, setCocktails] = useState([]); // On crée un état cocktails avec la fonction setCocktails pour le modifier. On utilise State pour récupérer la valeur mais aussi la recharger à chaque fois qu'elle change

    useEffect(() => { // On utilise useEffect pour effectuer une action au chargement du composant
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail') // On utilise la methode fetch pour faire une requete GET et récupérer les données de l'api
        .then(response => response.json()) // On transforme la réponse en JSON
        .then(data => setCocktails(data.drinks.slice(0, 10))) // On s'arrete à 10 cocktails
        }, []); // On passe un tableau vide pour que le code ne s'execute qu'une seule fois (éviter les boucles infinies)
        return ( // On retourne le jsx
            <div className="cocktail-list-container">
                <br></br>
                <h1>Listes des Cocktails</h1> {/* On affiche notre titre */}
                <div className="cocktail-list">
                    {cocktails.map((cocktail, index) => ( // On utilise la methode map pour parcourir le tableau cocktails
                        <div key={cocktail.idDrink} className="cocktail-item"> {/* On crée une div pour chaque cocktail avec une clé unique */}
                            <h2>{cocktail.strDrink}</h2> {/* On affiche le nom du cocktail */}
                            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="cocktail-image" /> {/* Et on affiche l'image du cocktail */}
                        </div>
                    ))}
                </div>
            </div>
        );
}

export default ListeCocktails; // On exporte le composant pour pouvoir l'utiliser ailleurs