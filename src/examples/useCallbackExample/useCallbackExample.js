/**
 *
 * useCallback est un hook dans React qui vous permet de mémoriser une fonction callback.
 * Cela signifie que tant que les dépendances de cette fonction ne changent pas, React réutilisera la même
 * référence de fonction à chaque rendu du composant. Voici quelques points clés pour comprendre useCallback
 * et son utilité :

 * Objectif Principal de useCallback
 * Optimisation des Performances :
 * useCallback est principalement utilisé pour optimiser les performances dans des scénarios où des fonctions
 * sont passées en tant que props à des composants enfants qui sont purement fonctionnels ou optimisés pour éviter
 * des rendus inutiles (comme les composants enveloppés dans React.memo). Si une fonction est recréée à chaque rendu
 * du parent, elle peut entraîner des rendus inutiles des composants enfants.
 *
 * Comment Fonctionne useCallback
 * Mémorisation de la Fonction : useCallback mémorise la fonction callback et ne la recrée que lorsque
 * certaines valeurs (dépendances) changent. Cela est utile lorsque la fonction callback est coûteuse en
 * termes de performances ou lorsqu'elle est passée à des composants enfants qui dépendent de la référence
 * de cette fonction pour éviter des rendus inutiles.
 *
 * Exemple d'Utilisation
 * Dans un Composant Parent :
 * Imaginons un composant parent qui passe une fonction callback à un
 * composant enfant. Sans useCallback, cette fonction serait recréée à chaque rendu du parent,
 * ce qui pourrait entraîner des rendus inutiles de l'enfant.
 *
 * Avec useCallback : En utilisant useCallback, le parent passe toujours la même référence de la fonction
 * au composant enfant tant que les dépendances ne changent pas, réduisant ainsi les rendus inutiles.
 *
 * À Noter
 * Utilisation Judicieuse :
 * Il est important d'utiliser useCallback judicieusement. Dans certains cas, l'utilisation de useCallback
 * peut être superflue, surtout si la fonction callback n'est pas passée à des composants enfants ou si les
 * composants enfants ne sont pas sensibles aux changements de référence.
 *
 * Complexité :
 * L'utilisation de useCallback (et de toute forme de mémorisation) peut ajouter de la
 * complexité au code. Il est conseillé de l'utiliser uniquement lorsque cela est
 * nécessaire pour optimiser les performances.
 *
 */

import React, {useState, useCallback} from "react";

// Composant enfant qui reçoit une fonction 'onAction' comme prop et affiche un bouton
function ChildComponent({onAction}): JSX.Element  {
    console.log("Rendu de ChildComponent");
    return <button className={'btn btn-success'}
                   onClick={onAction}>Utiliser useCallback( )
    </button>;
}

// Composant parent qui utilise le hook 'useCallback'
function UseCallbackExample(): JSX.Element  {
    // 'count' est une variable d'état qui garde le compte des clics
    const [count, setCount] = useState(0);

    // 'incrementCount' est une fonction mémorisée qui incrémente 'count'
    // useCallback s'assure que cette fonction n'est recréée que si les dépendances (ici, []) changent
    const incrementCount = useCallback((): void => {
        setCount(c => c + 1); // Incrémente 'count' de 1
    }, []); // Dépendances vides : la fonction ne sera recréée que lors du premier rendu

    return (
        <div className="flex-column flex-item">
            <h2>UseCallback( )</h2>
            <ChildComponent onAction={incrementCount}/>
            <a className={'color-teal text-small mt-2'}
               href={'https://github.com/BenjaminG95/React-Sandbox/blob/main/src/examples/useCallbackExample.js'}
               target={"_blank"} rel="noreferrer">Code source de UseCallbackExample</a>
            <p className={'text-small'}>Chaque clique incrémente le compteur<br/>
                Compteur actuel : {count}
            </p>
            {/* Le ChildComponent reçoit 'incrementCount'.
                Grâce à useCallback, 'incrementCount' garde la même référence à chaque rendu,
                évitant ainsi des rendus inutiles du ChildComponent. */}
        </div>
    );
}

export default UseCallbackExample;
