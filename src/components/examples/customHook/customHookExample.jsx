/**
 * Les Hooks personnalisés dans React permettent de réutiliser la logique de composant sans partager l'état.
 * Ils offrent une manière élégante de séparer la logique de l'état et des effets de côté des composants,
 * rendant le code plus modulaire et facile à maintenir.
 *
 * Points clés des Hooks personnalisés :
 *
 * Réutilisation de la Logique :
 * Les Hooks personnalisés permettent de décomposer la logique complexe des composants en fonctions réutilisables,
 * ce qui améliore la lisibilité et la maintenance du code.
 *
 * Séparation des Concerns :
 * En déplaçant la logique d'état et les effets de côté dans des Hooks personnalisés, les composants restent
 * plus concentrés sur leur rôle de présentation et deviennent plus déclaratifs.
 *
 * Réduction du Duplication :
 * Les Hooks personnalisés réduisent la duplication du code en évitant la répétition de la même logique
 * d'état ou d'effets dans différents composants.
 *
 * Exemple d'Utilisation :
 * Imaginons un Hook personnalisé pour gérer un compteur. Ce Hook peut être utilisé dans plusieurs
 * composants qui nécessitent une fonctionnalité de compteur, sans répéter la logique.
 *
 * Règles d'Utilisation :
 * Tout comme les Hooks standards de React, les Hooks personnalisés doivent respecter les règles des Hooks :
 * ne les appelez que dans des composants fonctionnels ou d'autres Hooks personnalisés, et ne les utilisez pas
 * dans des boucles, conditions ou fonctions imbriquées.
 *
 *
 *
 * Différence entre un custom hook et useReducer :
 * La différence entre un Hook personnalisé (Custom Hook) et useReducer dans React réside dans leur objectif et utilisation :
 *
 * useReducer :
 * useReducer est un Hook standard fourni par React.
 * Il est utilisé pour gérer des états locaux plus complexes au sein d'un composant. useReducer est
 * particulièrement utile lorsque la logique d'état est complexe ou lorsque le prochain état dépend de l'état précédent.
 * useReducer fonctionne avec un modèle de réduction, similaire à celui de Redux. Il prend une fonction
 * réductrice et un état initial. La fonction réductrice gère les actions et met à
 * jour l'état en fonction de ces actions.
 * Il est idéal pour les scénarios où vous avez des transitions d'état multiples et complexes qui peuvent
 * être mieux gérées dans une fonction séparée.
 *
 * Custom Hook :
 * Un Hook personnalisé est une fonction que vous créez vous-même pour encapsuler une logique réutilisable
 * entre différents composants. Ce n'est pas une fonctionnalité spécifique de React, mais plutôt un modèle de
 * conception que vous pouvez utiliser avec les Hooks de React.
 * Vous pouvez utiliser des Hooks standards de React comme useState, useEffect, useContext, et useReducer à
 * l'intérieur d'un Hook personnalisé pour créer des comportements réutilisables.
 * Un Hook personnalisé peut être conçu pour faire n'importe quoi, de la gestion d'état à la manipulation du DOM
 * en passant par l'interaction avec une API. Il peut aussi utiliser useReducer
 * en interne si cela est nécessaire pour sa logique.
 * Les Hooks personnalisés sont utiles pour partager de la logique entre plusieurs composants sans reproduire le même code.
 * En résumé, useReducer est un outil spécifique pour gérer des états complexes dans un composant,
 * tandis que les Hooks personnalisés sont un modèle de conception permettant de réutiliser une logique
 * d'état, d'effets de côté, ou d'autres comportements entre différents composants. Un Hook personnalisé
 * peut intégrer useReducer en son sein si la logique de gestion de l'état l'exige.
 *
 *  Voir https://fr.react.dev/learn/reusing-logic-with-custom-hooks pour plus d'informations.
 */

import React, { useCallback, useState } from 'react';

// Hook personnalisé pour un compteur
function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue);

    const increment = useCallback(() => setCount(c => c + 1), []);
    const decrement = useCallback(() => setCount(c => c - 1), []);

    return {count, increment, decrement};
}

// Composant qui utilise le Hook personnalisé 'useCounter'
function CustomHookExample() {
    const {count, increment, decrement} = useCounter(); // Utilisation de useCounter

    return (
        <>
            <div
                className="flex flex-col items-center justify-center bg-gradient-to-r from-emerald-800 to-yellow-700 rounded-lg p-6 shadow-lg text-white transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl space-y-10">
                <h2 className="text-2xl font-bold">Custom Hook</h2>
                <a className="text-cyan-300 hover:text-indigo-800 text-sm my-4"
                   href="https://github.com/BenjaminG95/React-Sandbox/blob/main/src/components/examples/customHook/customHookExample.jsx"
                   target="_blank" rel="noreferrer">Code source de customHookExample</a>
                <p className="text-sm">Compteur : { count }</p>
                <div className="mt-4 flex flex-col  space-y-2">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                            onClick={ increment }>
                        Incrémenter
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            onClick={ decrement }>
                        Décrémenter
                    </button>
                </div>
                {/* CustomHookExample utilise le Hook personnalisé 'useCounter' pour gérer l'état et la logique du compteur. */ }
            </div>
        </>
    );
}

export default CustomHookExample;
