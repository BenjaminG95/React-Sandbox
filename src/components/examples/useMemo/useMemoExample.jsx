/**
 * useMemo est un Hook dans React qui permet d'optimiser les performances des composants fonctionnels
 * en mémorisant des valeurs coûteuses à calculer. Lorsque vous utilisez useMemo, React mémorise le résultat
 * d'une fonction et ne la recalcule que si l'une des dépendances a changé. Cela est particulièrement utile
 * pour éviter des calculs inutiles sur des rendus qui n'affectent pas le résultat de ces calculs.
 *
 * Voici quelques points clés sur useMemo :
 *
 * Optimisation de Performance :
 * useMemo est utilisé pour réduire le coût de calcul en mémorisant les résultats de fonctions coûteuses.
 * Si les dépendances ne changent pas entre les rendus, React réutilisera la valeur mémorisée.
 *
 * Dépendances :
 * useMemo prend un tableau de dépendances en deuxième argument.
 * La fonction passée à useMemo ne sera réexécutée que si les valeurs de ces dépendances ont changé.
 *
 * Utilisations Courantes :
 * Calculs coûteux qui ne doivent pas être exécutés à chaque rendu.
 * Mémorisation de valeurs pour une utilisation dans d'autres hooks ou composants.
 *
 * Règles d'Utilisation :
 * Comme tous les Hooks, useMemo doit être appelé au niveau supérieur d'un composant fonctionnel ou d'un autre Hook
 * personnalisé, et non à l'intérieur de boucles, conditions ou fonctions imbriquées.
 *
 * Remarque : L'utilisation de useMemo n'est pas toujours nécessaire et doit être utilisée avec discernement.
 * Abuser de useMemo peut entraîner une surconsommation de mémoire et des performances réduites dans certains cas.
 */

import React, { useMemo, useState } from 'react';

function MemoExample() {
    // utilisation de useState pour créer une variable d'état 'input' initialisée à une chaîne vide
    const [input, setInput] = useState('');

    // utilisation de useMemo pour mémoriser un résultat calculé
    // dans cet exemple, nous mémorisons la longueur de la chaîne 'input'
    const memoizedValue = useMemo(() => {
        return input.length;
    }, [input]); // La mémorisation est recalculée uniquement si 'input' change.

    function handleInputChange(e) {
        setInput(e.target.value);
    }

    return (
        <>
            <div
                className="flex flex-col items-center justify-center bg-gradient-to-r from-orange-500 to-emerald-600 rounded-lg p-6 shadow-lg text-white transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl space-y-10">
                <h2 className="text-2xl font-bold">UseMemo()</h2>
                <input
                    type="text"
                    value={ input }
                    onChange={ handleInputChange }
                    className="bg-white text-gray-800 font-normal py-2 px-4 rounded mt-4 w-full"
                    placeholder="Écrivez un message"
                />
                <a className="text-cyan-300 hover:text-indigo-800 text-sm mt-4"
                   href="https://github.com/BenjaminG95/React-Sandbox/blob/main/src/components/examples/useMemo/useMemoExample.jsx"
                   target="_blank" rel="noreferrer">Code source de useMemoExample</a>
                <p className="text-sm mt-4">
                    Longueur de la chaîne mémorisée : { memoizedValue }
                </p>
            </div>
        </>
    );
}

export default MemoExample;
