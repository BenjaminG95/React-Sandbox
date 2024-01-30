// voir components/ReactRouterExample.jsx pour plus d'explications
import React from "react";
import {Link, useParams} from 'react-router-dom';

function ReactRouterWithParamExample() {
    const {param} = useParams();

    return (<>
        <main className="min-h-screen flex flex-col items-center justify-center text-center">
            <h2>Le paramètre est '{param}'</h2>
            <a className={'text-cyan-300 hover:text-indigo-800 text-sm my-4'}
               href={'https://github.com/BenjaminG95/React-Sandbox/blob/main/src/pages/reactRouterWithParamExample.jsx'}
               target={'_blank'}
               rel="noreferrer">Code source de la page reactRouterWithParamExample.jsx</a>
                <Link to="/" className={'bg-cyan-400 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded mt-10'}>Retour à l'Accueil</Link>
        </main>
    </>);
}

export default ReactRouterWithParamExample;
