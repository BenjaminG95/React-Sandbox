import React, {useState, useEffect} from "react";

function EffectExample() {
    // utilisation de useState pour créer une variable d'état 'count' initialisée à 0
    // voir useStateExamples.js pour plus d'informations sur useState
    const [count, setCount] = useState(0);

    useEffect(() => {
        // À chaque modification de 'count', le titre du document (dans l'onglet du navigateur) est mis à jour.
        document.title = `Vous avez cliqué ${count} fois`;

        // Ce code démontre l'un des nombreux usages possibles de useEffect.
        // Outre la mise à jour du titre du document, useEffect est idéal pour effectuer des effets de bord,
        // tels que les requêtes HTTP ou l'interaction avec des API externes.
        // En tant que Hook, useEffect combine les fonctionnalités des méthodes de cycle de vie des composants de classe
        // comme componentDidMount, componentDidUpdate, et componentWillUnmount dans un seul et même endroit.
        // Pour en savoir plus sur useEffect et ses multiples applications, consultez la documentation officielle de React :
        // https://fr.reactjs.org/docs/hooks-effect.html

        // La fonction de nettoyage ci-dessous est appelée avant que le composant ne se démonte
        // ou avant la prochaine exécution de l'effet si 'count' change.
        return () => {
            document.title = "React App";
        };
    }, [count]); // L'effet s'exécute uniquement si 'count' change.


    function incrementCount() {
        setCount(count + 1);
    }

    return (<>
        <div className={'flex-column'}>
            <button className={'btn btn-secondary'} onClick={incrementCount}>
                Incrémenter le compteur et tester le useEffect, voir le titre de l'onglet du navigateur
            </button>
            <p className={'text-small'}>Chaque clique incrémente le compteur, puis change le nom de l'onglet.</p>
            <p className={'text-small'}>Compteur : {count}</p>
        </div>

    </>);
}

export default EffectExample;
