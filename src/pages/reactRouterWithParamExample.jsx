// voir components/ReactRouterExample.jsx pour plus d'explications
import React from "react";
import {Link, useParams} from 'react-router-dom';

function ReactRouterWithParamExample() {
    const {param} = useParams();

    return (<>
        <main className="min-h-screen flex flex-col items-center justify-center text-center">
            <div
                className="flex flex-col items-center justify-center bg-gradient-to-r from-indigo-800 to-purple-500 rounded-lg p-6 shadow-lg text-white transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl space-y-10">
            <h2 className='font-bold'>Le paramètre est '{param}'</h2>
            <a className={'text-cyan-300 hover:text-indigo-800 text-sm my-4'}
               href={'https://github.com/BenjaminG95/React-Sandbox/blob/main/src/pages/reactRouterWithParamExample.jsx'}
               target={'_blank'}
               rel="noreferrer">Code source de la page reactRouterWithParamExample.jsx</a>
                <Link to="/" className={'bg-cyan-400 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded mt-10'}>Retour à l'Accueil</Link>
            </div>
        </main>
    </>);
}

export default ReactRouterWithParamExample;
