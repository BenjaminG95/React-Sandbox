/**
 * useState est un Hook dans React qui vous permet d'ajouter un état local à vos composants fonctionnels.
 * Voici quelques points clés pour comprendre useState :
 *
 * Ajout d'État Local :
 * useState permet à vos composants fonctionnels de maintenir leur propre état local.
 * Auparavant, cela n'était possible que dans les composants de classe.
 *
 * Déclaration de l'État :
 * Lorsque vous utilisez useState, vous déclarez une "variable d'état".
 * Cette variable est "persistante" entre les rendus du composant. C'est-à-dire que React
 * se souvient de sa valeur lors du rechargement du composant.
 *
 * Initialisation de l'État :
 * Vous initialisez l'état avec une valeur par défaut en passant cette valeur à useState.
 * Par exemple, const [count, setCount] = useState(0); initialise count à 0.
 *
 * Mise à Jour de l'État :
 * useState renvoie une paire de valeurs : la variable d'état actuelle et une fonction qui vous permet
 * de mettre à jour cette variable. Vous pouvez appeler cette fonction pour changer la valeur de l'état,
 * ce qui déclenchera également le rechargement du composant.
 *
 * Preservation de l'État entre les Rendus :
 * React maintient l'état entre les différents rendus.
 * Chaque fois que l'état change (via la fonction de mise à jour),
 * le composant est rechargé et affiche les nouvelles données.
 *
 * Utilisation dans les Composants Fonctionnels :
 * useState rend les composants fonctionnels aussi puissants que les composants de
 * classe en termes de capacité à gérer l'état, tout en restant concis et lisibles.
 *
 * Indépendance de l'État :
 * Chaque appel à useState crée un état indépendant. Vous pouvez donc avoir plusieurs variables
 * d'état dans le même composant.
 *
 * Asynchronicité des Mises à Jour : Les mises à jour de l'état que vous déclenchez avec la fonction de mise
 * à jour sont potentiellement asynchrones pour des performances optimisées.
 *
 * En résumé, useState est un outil essentiel pour gérer l'état local dans les composants
 * fonctionnels de React, offrant une flexibilité et une expressivité accrues pour le
 * développement d'applications interactives.
 */
import React, { useState } from "react";

// Nous allons créer une fonction qui va incrémenter un compteur à chaque clique sur un bouton
// cette dernière utilisera le Hook useState
function UseStateExample() {
    // ici, count est la variable d'état et setCount est la fonction de mise à jour de l'état
    // useState(0) initialise count à 0
    const [count, setCount] = useState(0);

    // incrémente count de 1 à chaque clique sur le bouton
    function incrementCountDirectWay() {
        setCount(count + 1);
        /* setCount(count + 1); */

        // Appeler setCount(count + 1) une seconde fois en espérant obtenir 2 ne fonctionnera pas,
        // car les mises à jour d'état en React sont asynchrones.
        // Cela reviendrait à faire setCount(0 + 1) deux fois, ce qui donnerait finalement 1, et non 2.
    }

    function IncrementCountWithPrevCount() {
        // 'prevCount' est la valeur actuelle de 'count' au moment où cette mise à jour est appliquée.
        // Étant donné que count est initialisé à 0, prevCount aura la valeur 0 lors de la première incrémentation.
        setCount(prevCount => prevCount + 1);
        /* setCount(prevCount => prevCount + 1); */

        // On pourrait penser que cela revient à la même chose que faire setCount(count + 1),
        // mais il y a une différence importante. Cette syntaxe utilise une fonction fléchée passée à setCount.
        // Cette fonction prend la valeur actuelle de l'état (prevCount dans ce cas, qui représente la valeur la plus récente de count)
        // et renvoie une nouvelle valeur pour l'état.
        // Si on refait setCount(prevCount => prevCount + 1) une deuxième fois consécutive, on obtiendra bien un incrément de 2,
        // car chaque appel utilise la valeur la plus récente de count mise à jour par l'appel précédent contrairement à l'écriture directe.

        // À noter que, bien que nous utilisions ici l'incrément d'un compteur, cette approche peut être appliquée à d'autres types de données.
        // Par exemple, pour un booléen, nous pourrions faire : setBoolean(prevBool => !prevBool); pour basculer sa valeur au clique.
    }

    function IncrementButtonGoFurtherIntoLogic() {
        // Première incrémentation : Ajoute 1 à 'count' directement.
        // Cette méthode est simple et efficace si l'état actuel n'est pas critique.
        setCount(count + 1);

        // Deuxième incrémentation : Utilise une fonction pour ajouter 1 à 'count'.
        // 'prevCount' est la valeur actuelle de 'count' lors de l'exécution de cette mise à jour.
        // Cette méthode garantit que l'incrémentation utilise la valeur la plus récente de 'count'.
        setCount(prevCount => prevCount + 1);
        // 'prevCount' à donc en ce moment la valeur 2.

        // Troisième incrémentation : Ajoute 2 directement à 'count'.
        // Cependant, 'count' n'a pas encore été mis à jour par les appels précédents à ce stade.
        // Les mises à jour d'état sont asynchrones, donc 'count' n'est pas mis à jour immédiatement.
        // Donc, cette incrémentation est basée sur la valeur initiale de 'count', soit 0.
        setCount(count + 3);
        // si nous arrêtions le code ici, 'count' aurait la valeur 3, une itération de 3 serait donc effectué à chaque clique sur le bouton

        // Quatrième incrémentation : Utilise une fonction pour ajouter 2 à 'count'.
        // Encore une fois, 'prevCount' représente la valeur actuelle de 'count' lors de cette mise à jour, soit 3.
        // Cela assure que l'incrémentation prend en compte les mises à jour précédentes.
        // De plus, on logg la valeur de 'prevCount' pour suivre les changements.
        setCount(prevCount => {
            console.log(prevCount); // Affiche la valeur actuelle de 'prevCount' (sera 3 ici).
            return prevCount + 2;   // Incrémente 'prevCount' de 2, résultant en un total de 5.
        });
        // En fin de compte, ces appels incrémentent 'count' de 5 au total.
        // Mais l'ordre et le moment exacts des mises à jour peuvent varier en fonction de la gestion par React.

        // Loggez count et prevCount sur les différentes incrémentations pour voir les changements
    }

    return (
        <>
            <div
                className="flex flex-col items-center justify-center bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg p-6 shadow-lg text-white transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl space-y-10">
                <h2 className="text-2xl font-bold">UseState()</h2>
                {/* Changez le nom de la fonction appelée dans le onClick pour tester les différentes méthodes */ }

                <a className="text-cyan-300 hover:text-indigo-800 text-sm mt-4"
                   href="https://github.com/BenjaminG95/React-Sandbox/blob/main/src/components/examples/useState/useStateExample.jsx"
                   target="_blank" rel="noreferrer">Code source de useStateExample</a>
                <p className="text-sm mt-4">Chaque clique incrémente le compteur <br/>
                    Compteur actuel : { count } <br/>
                </p>
                <button className="bg-cyan-400 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded mt-4"
                        onClick={ incrementCountDirectWay }
                >
                    Utiliser useState()
                </button>
            </div>

        </>
    );
}

export default UseStateExample;

