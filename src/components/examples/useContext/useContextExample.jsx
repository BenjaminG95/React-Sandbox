/**
 * useContext est un Hook dans React qui permet d'accéder à la valeur du contexte de React
 * sans avoir à utiliser un Consumer. Le contexte est un moyen de passer des données à travers
 * l'arbre des composants sans avoir à passer manuellement les props à chaque niveau.
 * useContext est particulièrement utile pour partager des données globales comme les thèmes,
 * la langue, les données d'authentification, etc.
 *
 * Points clés de useContext :
 *
 * Simplification de l'accès au contexte :
 * useContext simplifie l'accès aux données du contexte en évitant le besoin d'utiliser
 * des composants Consumer, rendant le code plus lisible et moins imbriqué.
 *
 * Utilisation avec Context.Provider :
 * useContext est utilisé en conjonction avec Context.Provider pour accéder aux données du contexte.
 * Le Provider doit envelopper les composants qui ont besoin d'accéder au contexte.
 *
 * Exemple d'utilisation :
 * Imaginons un contexte de thème où les composants ont besoin d'accéder à la valeur du thème actuel.
 * Avec useContext, les composants peuvent accéder directement à cette valeur sans avoir à la faire passer
 * à travers tous les niveaux de composants.
 *
 * Règles d'utilisation :
 * useContext doit être utilisé dans un composant fonctionnel ou un autre Hook personnalisé.
 * Il ne doit pas être utilisé dans les méthodes de cycle de vie des composants de classe.
 *
 * Conseils d'utilisation :
 * Bien que useContext soit puissant, il ne doit pas être abusé. Un usage excessif peut rendre
 * le flux de données dans l'application difficile à suivre.
 */
import React, { createContext, useContext, useState } from "react";

// Création d'un contexte de thème
export const ThemeContext = createContext('light');

// Composant enfant qui utilise useContext pour accéder au thème
function ChildComponent() {
    const theme = useContext(ThemeContext); // Accès au thème actuel
    return (
        <div className={ `theme-${ theme } mt-1` }>
            Thème actuel : { theme }
        </div>
    );
}

// Composant parent qui utilise le ThemeContext.Provider
function UseContextExample() {
    const [theme, setTheme] = useState('light'); // Thème actuel

    // Fonction pour changer le thème
    function toggleTheme() {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light'); // Changement du thème
    }

    // Utilisation du ThemeContext.Provider pour envelopper les composants qui ont besoin d'accéder au contexte
    // La valeur du contexte est passée en tant que prop value
    // Tous les composants enfants de ThemeContext.Provider ont accès à la valeur du contexte
    // ThemeContext.Provider doit être utilisé pour envelopper les composants qui ont besoin d'accéder au contexte
    // ThemeContext.Provider peut être utilisé plusieurs fois pour créer des arbres de contexte indépendants
    return (
        <ThemeContext.Provider value={ theme }>
            <div
                className="flex flex-col items-center justify-center bg-gradient-to-r from-indigo-800 to-purple-500 rounded-lg p-6 shadow-lg text-white transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl space-y-10">
                <h2 className="text-2xl font-bold">UseContext()</h2>
                <a className="text-cyan-300 hover:text-indigo-800 text-sm my-2"
                   href="https://github.com/BenjaminG95/React-Sandbox/blob/main/src/components/examples/useContext/useContextExample.jsx"
                   target="_blank" rel="noreferrer">Code source de UseContextExample</a>
                <ChildComponent/>
                <button className="bg-cyan-400 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded mt-4"
                        onClick={ toggleTheme }
                >
                    Utiliser UseContext()
                </button>
            </div>
            {/* ChildComponent a maintenant accès au thème sans avoir besoin de lui passer explicitement en tant que prop. */ }
        </ThemeContext.Provider>
    );
}

export default UseContextExample;
