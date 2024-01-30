// voir components/ReactRouterExample.jsx pour plus d'explications

import React, {useState} from "react"; // Importation de useState pour gérer les états
import {useNavigate} from "react-router-dom"; // Importation du hook useNavigate pour la navigation programmée

function ReactRouterWithParamExample() {
    const [param, setParam] = useState(""); // État pour stocker la valeur saisie
    const [error, setError] = useState(""); // État pour stocker le message d'erreur
    const navigate = useNavigate(); // Hook pour la navigation programmée

    const handleSubmit = () => {
        if (param.trim() === "") {
            // Vérifie si le champ est vide et définit un message d'erreur
            setError("Remplissez le paramètre"); // Définit le message d'erreur
        } else {
            // Navigue vers la route avec le paramètre et réinitialise l'erreur
            navigate(`/router-example/${param}`);
            setError(""); // Réinitialiser l'erreur lors de la navigation
        }
    };

    return (<>
        <div className="flex flex-col items-center justify-center bg-gradient-to-r
         from-purple-800 to-emerald-800 rounded-lg p-6 shadow-lg text-white transition
          duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="text-2xl font-bold">React Router avec Param</h2>
            <a className="text-cyan-300 hover:text-indigo-800 text-sm mt-4"
               href="https://github.com/BenjaminG95/React-Sandbox/blob/main/src/components/examples/reactRouter/reactRouterWithParamExample.jsx"
               target="_blank" rel="noreferrer">Code source de reactRouterWithParamExample</a>
            <a className="text-cyan-300 hover:text-indigo-800 text-sm mt-4"
               href="https://github.com/BenjaminG95/React-Sandbox/blob/main/src/App.jsx"
               target="_blank" rel="noreferrer">Code source de app.js</a>
            {error && <div className="text-red-500 mt-4">{error}</div>}
            <input
                type="text"
                className="mt-4 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white
                bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                value={param}
                onChange={(e) => {
                    setParam(e.target.value);
                    setError(""); // Réinitialiser l'erreur lors de la modification du champ
                }}
                placeholder="Entrez un paramètre"
            />
            <button className="bg-cyan-400 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded mt-4"
                    onClick={handleSubmit}>
                React Router avec Param
            </button>
        </div>
    </>);
}

export default ReactRouterWithParamExample;
