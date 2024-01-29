// voir Pages/reactRouterExample.js pour plus d'explications

import { useState } from "react"; // Importation de useState pour gérer les états
import { useNavigate } from "react-router-dom"; // Importation du hook useNavigate pour la navigation programmée

function ReactRouterWithParamExample() {
    const [param, setParam] = useState(""); // État pour stocker la valeur saisie
    const [error, setError] = useState(""); // État pour stocker le message d'erreur
    const navigate = useNavigate(); // Hook pour la navigation programmée

    const handleSubmit = () => {
        if (param.trim() === "") {
            // Vérifie si le champ est vide et définit un message d'erreur
            setError("Remplissez le paramètre");
        } else {
            // Navigue vers la route avec le paramètre et réinitialise l'erreur
            navigate(`/routerExample/${param}`);
            setError("");
        }
    };

    return (<>
        <div className={'flex-column flex-item'}>
            <h2>React Router</h2>

            <button className={'btn btn-pink mt-2'} onClick={handleSubmit}>
                React Router avec Param
            </button>
            {error && <div style={{ color: 'red' }}>{error}</div>} {/* Affichage du message d'erreur */}
            <input
                type={'text'}
                className={'text-small mt-2'}
                value={param}
                onChange={(e) => {
                    setParam(e.target.value);
                    setError(""); // Réinitialiser l'erreur lors de la modification du champ
                }}
                placeholder="Entrez un paramètre"
            />
        </div>
    </>);
}

export default ReactRouterWithParamExample;
