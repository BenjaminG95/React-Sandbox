/**
 * Une "ref" dans React est un moyen de référencer un élément ou un composant du DOM dans le code.
 * Le terme "ref" est une abréviation de "référence". React fournit l'API useRef pour créer des refs dans
 * les composants fonctionnels. Les refs sont utiles dans plusieurs scénarios, notamment :
 *
 * Accès Direct aux Éléments du DOM :
 * En React, vous modifiez généralement le DOM de manière déclarative via l'état et les props.
 * Cependant, parfois, vous avez besoin d'accéder directement à un élément du DOM pour faire des choses
 * que React ne gère pas de manière native, comme gérer le focus, la sélection de texte, ou les animations.
 *
 * Stocker une Valeur Mutable :
 * Les refs peuvent également être utilisées pour stocker une valeur mutable
 * qui ne déclenche pas de re-rendu lorsqu'elle change. Cela peut être utile pour conserver
 * une valeur entre les rendus sans causer de mise à jour supplémentaire.
 *
 * Exemples d'Utilisation
 * Gérer le Focus, la Sélection de Texte, ou les Médias :
 * Par exemple, pour mettre automatiquement le focus sur un champ de texte lors du chargement d'un composant.
 *
 * Mesures DOM :
 * Mesurer la taille ou la position d'un élément du DOM.
 *
 * Intégrations avec des Bibliothèques Extérieures :
 * Intégrer des bibliothèques JavaScript qui interagissent directement avec le DOM.
 *
 * À Noter
 * Les refs ne doivent pas être abusées. La plupart des cas d'utilisation pour la manipulation du
 * DOM doivent être gérés de manière déclarative en React.
 * Les changements apportés à .current ne sont pas suivis et ne provoquent pas de re-rendus.
 *
 * En résumé, les refs dans React sont un outil puissant pour certaines interactions directes avec le DOM et pour
 * stocker des références à des valeurs ou des éléments qui ne déclenchent pas de mise à jour de l'interface
 * utilisateur lorsqu'ils changent.
 *
 * pour plus d'informations sur useRef, voir https://react.dev/reference/react/useRef
 *
 * pour plus d'info sur les références en javascript en général, voir
 * https://la-cascade.io/articles/un-guide-visuel-des-references-en-javascript
 */

import React, { useRef } from "react";

function UseRefExample() {
    // Créez une référence pour un élément du DOM
    // useRef() renvoie un objet mutable avec une propriété current initialement définie sur la valeur passée en argument (initialValue).
    // La valeur renvoyée par useRef sera persistante pendant toute la durée de vie du composant.
    const inputRef = useRef(null);

    // Fonction pour se concentrer sur l'input lorsque le bouton est cliqué
    function focusOnInputAndSetValue() {
        // Accès direct à l'élément du DOM et mise au point sur celui-ci
        // inputRef.current est l'élément du DOM

        // Le if est une sécurité pour éviter une erreur si l'élément n'existe pas
        if (inputRef.current) {
            // Affecte la valeur à l'élément input
            inputRef.current.value = "Hello World";
            // inputRef.current.focus() met le focus sur l'élément du DOM
            // inputRef.current.focus() est équivalent à document.querySelector('input').focus()
            inputRef.current.focus();
        }
    }

    return (
        <>
            <div
                className="flex flex-col items-center justify-center bg-gradient-to-r from-red-700 to-orange-500 rounded-lg p-6 shadow-lg text-white transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl space-y-10">
                <h2 className="text-2xl font-bold">UseRef()</h2>

                <a className="text-cyan-300 hover:text-indigo-800 text-sm mt-5"
                   href="https://github.com/BenjaminG95/React-Sandbox/blob/main/src/components/examples/useRef/useRefExample.jsx"
                   target="_blank" rel="noreferrer">Code source de UseRefExample</a>
                <p className="text-sm mt-4">
                    Cliquez sur le bouton pour mettre le focus sur
                    <br/>le champ de texte et ajouter la value "Hello World".
                </p>
                <input ref={ inputRef }
                       className="text-sm mt-4"
                       type="text"
                       placeholder="Appuyez sur le bouton"
                       disabled={ true }/>
                <button className="bg-cyan-400 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded mt-4"
                        onClick={ focusOnInputAndSetValue }
                >
                    Utiliser useRef()
                </button>
            </div>
        </>
    );
}

export default UseRefExample;