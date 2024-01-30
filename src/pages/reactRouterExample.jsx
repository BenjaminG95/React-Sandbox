import React from "react";
import {Link} from "react-router-dom";

// Exemple de composant React Router
function ReactRouterExample() {
    return (<>
        <main className="min-h-screen flex flex-col items-center justify-center text-center">
            <h2>Exemple de React Router</h2>
            <p>Cette page est un exemple de la façon d'utiliser React Router dans une application React.</p>
            <a className={'text-cyan-300 hover:text-indigo-800 text-sm my-4'}
               href={'https://github.com/BenjaminG95/React-Sandbox/blob/main/src/pages/reactRouterExample.jsx'}
               target={"_blank"}
               rel="noreferrer">Code source de la page reactRouterExample.jsx</a>
            <div className="navigation-links">
                <Link to="/" className={'bg-cyan-400 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded mt-10'}>Retour à l'Accueil</Link>
            </div>
        </main>
</>);
}

export default ReactRouterExample;