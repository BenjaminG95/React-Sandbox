/**
 * useEffect est un Hook dans React qui permet d'effectuer des effets de bord (side effects) dans les composants
 * fonctionnels. Un "effet de bord" est toute opération qui affecte autre chose que la valeur de retour d'une
 * fonction et qui n'est pas directement liée au rendu de l'interface utilisateur, comme les requêtes de données,
 * les manipulations directes du DOM, les abonnements, etc. useEffect est utilisé pour organiser et gérer ces
 * opérations de manière efficace et cohérente dans les composants fonctionnels.
 *
 * Voici quelques points clés sur useEffect :
 *
 * Combinaison des Cycles de Vie :
 * useEffect sert à combiner les capacités de plusieurs méthodes de cycle de vie des composants de classe,
 * telles que componentDidMount, componentDidUpdate, et componentWillUnmount.
 *
 * Exécution Après le Rendu :
 * Les effets définis dans useEffect sont exécutés après le rendu du composant.
 * Cela signifie qu'ils ne bloquent pas le rendu visuel et permettent à l'interface utilisateur de rester réactive.
 *
 * Nettoyage :
 * useEffect peut retourner une fonction de nettoyage.
 * Cette fonction est appelée avant que le composant ne soit retiré de l'interface utilisateur
 * (démonté) ou avant que l'effet ne soit réexécuté. Cela est utile pour nettoyer ou
 * annuler des abonnements, des écouteurs d'événements, etc.
 *
 * Dépendances : useEffect prend un tableau de dépendances en deuxième argument.
 * L'effet ne sera réexécuté que si les valeurs de ces dépendances ont changé entre les rendus.
 * Si vous passez un tableau vide ([]), l'effet ne s'exécutera qu'une seule fois après le premier
 * rendu, similaire à componentDidMount.
 *
 * Utilisations Courantes :
 * Chargement de données depuis une API.
 * Mise en place et nettoyage d'abonnements ou d'écouteurs d'événements.
 * Mises à jour manuelles du DOM.
 * Enregistrement et lecture de données dans le stockage local du navigateur.
 * Règles d'Utilisation : Comme pour tous les Hooks, useEffect doit être appelé au niveau supérieur d'un composant fonctionnel ou d'un autre Hook personnalisé, et non à l'intérieur de boucles, conditions ou fonctions imbriquées.
 */

import React, { useEffect, useState } from "react";

function EffectExample() {
    // utilisation de useState pour créer une variable d'état 'count' initialisée à 0
    // voir useStateExamples.js pour plus d'informations sur useState
    const [count, setCount] = useState(0);

    useEffect(() => {
        // À chaque modification de 'count', le titre du document (dans l'onglet du navigateur) est mis à jour.
        document.title = `Vous avez cliqué ${ count } fois`;

        // Ce code démontre l'un des nombreux usages possibles de useEffect.
        // Outre la mise à jour du titre du document, useEffect est idéal pour effectuer des effets de bord,
        // tels que les requêtes HTTP ou l'interaction avec des API externes.
        // En tant que Hook, useEffect combine les fonctionnalités des méthodes de cycle de vie des composants de classe
        // comme componentDidMount, componentDidUpdate, et componentWillUnmount dans un seul et même endroit.
        // Pour en savoir plus sur useEffect et ses multiples applications, consultez la documentation officielle de React :
        // https://react.dev/reference/react/useEffect

        // La fonction de nettoyage ci-dessous est appelée avant que le composant ne se démonte
        // ou avant la prochaine exécution de l'effet si 'count' change.
        return () => {
            document.title = "React App";
        };
    }, [count]); // L'effet s'exécute uniquement si 'count' change.

    function incrementCount() {
        setCount(count + 1);
    }

    return (
        <>
            <div
                className="flex flex-col items-center justify-center bg-gradient-to-r from-teal-600 to-indigo-700 rounded-lg p-6 shadow-lg text-white transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl space-y-10">
                <h2 className="text-2xl font-bold">UseEffect()</h2>
                <a className="text-cyan-300 hover:text-indigo-800 text-sm mt-4"
                   href="https://github.com/BenjaminG95/React-Sandbox/blob/main/src/components/examples/useEffect/useEffectExample.jsx"
                   target="_blank" rel="noreferrer">Code source de UseEffectExample</a>
                <p className="text-sm mt-4">
                    Chaque clique incrémente le compteur, puis change le nom de l'onglet.<br/>
                    Compteur actuel : { count }
                </p>
                <button className="bg-cyan-400 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded mt-4"
                        onClick={ incrementCount }
                >
                    Utiliser useEffect()
                </button>
            </div>
        </>
    );
}

export default EffectExample;
