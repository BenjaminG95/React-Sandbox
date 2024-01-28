/**
 * useReducer est un Hook dans React qui permet de gérer des états plus complexes avec une logique de mise à jour
 * centralisée. Il est similaire à useState, mais est plus adapté aux états qui impliquent plusieurs sous-valeurs ou
 * lorsqu'une logique de mise à jour est complexe. useReducer offre également une alternative plus proche de Redux
 * pour la gestion de l'état dans les composants fonctionnels.
 *
 * Points clés de useReducer :
 *
 * Gestion d'État Complexe :
 * useReducer est utile pour gérer des états d'application complexes et interdépendants dans un composant.
 *
 * Logique de Mise à Jour Centralisée :
 * Avec useReducer, toute la logique de mise à jour de l'état est centralisée dans un "réducteur" - une fonction
 * qui décide comment l'état doit changer en réponse à une action.
 *
 * Alternative à useState :
 * Pour les états simples, useState est souvent suffisant. Cependant, pour des cas où l'état est complexe ou
 * dépend de l'état précédent, useReducer peut rendre le code plus clair et plus prévisible.
 *
 * Utilisation avec Dispatch :
 * useReducer renvoie une paire de valeurs: l'état actuel et une fonction dispatch. dispatch est utilisé pour
 * envoyer des actions au réducteur afin de mettre à jour l'état.
 *
 * Exemple d'Utilisation :
 * Imaginons un composant de compteur avec une logique de mise à jour plus complexe que de simples incréments
 * ou décrements. useReducer peut gérer ce genre de logique de manière plus organisée.
 *
 * Règles d'Utilisation :
 * Comme tous les Hooks, useReducer doit être utilisé au niveau supérieur d'un composant fonctionnel.
 * Il ne doit pas être utilisé dans les boucles, conditions, ou fonctions imbriquées.
 *
 * Voir https://fr.react.dev/reference/react/useReducer pour plus d'informations.
 */

import React, {useReducer} from 'react';

// Définition de l'état initial
const initialState = {count: 0};

// Définition du réducteur
function reducer(state, action) {
    // Le réducteur prend l'état actuel et une action, et renvoie un nouvel état mis à jour.
    // Dans ce cas, l'action est soit 'increment' ou 'decrement'.
    switch (action.type) { // On vérifie le type de l'action
        case 'increment': // Si l'action est 'increment'
            return {count: state.count + 1}; // Le réducteur renvoie un nouvel état avec count + 1.
        case 'decrement': // Si l'action est 'decrement'
            return {count: state.count - 1}; // Le réducteur renvoie un nouvel état avec count - 1.
        default: // Si l'action n'est ni 'increment' ni 'decrement'
            throw new Error(); // Le réducteur renvoie une erreur.
    }
}

// Composant qui utilise useReducer
function UseReducerExample(): JSX.Element {
    // Utilisation de useReducer
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="flex-column flex-item">
            <h2>UseReducer( )</h2>
            {/* Lorsque l'utilisateur clique sur un bouton, dispatch est appelé avec une action correspondante. */}
            {/* Le réducteur est appelé et renvoie un nouvel état. */}
            {/* L'état est mis à jour et le composant est re-rendu. */}
            <div>
                <button className={'btn btn-success'} onClick={() => dispatch({type: 'increment'})}>
                    Incrémenter
                </button>
                <button className={'btn btn-danger'} onClick={() => dispatch({type: 'decrement'})}>
                    Décrémenter
                </button>
            </div>
            <a className={'color-teal text-small my-2'}
               href={'https://github.com/BenjaminG95/React-Sandbox/blob/main/src/examples/useReducerExample.js'}
               target={"_blank"} rel="noreferrer">Code source de UseReducerExample</a>
            <p>Compteur : {state.count}</p>
            {/* Le composant UseReducerExample utilise un réducteur pour gérer l'état du compteur de manière plus structurée. */}
        </div>
    );
}

export default UseReducerExample;
