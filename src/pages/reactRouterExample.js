import {Link} from "react-router-dom";

// Exemple de composant React Router
function ReactRouterExample() {
    return (
        <div className={'App-main'}>
            <h2>Exemple de React Router</h2>
            <p className={'text-small'}>Cette page est un exemple de la façon d'utiliser React Router dans une application React.</p>
            <div className="navigation-links">
                <Link to="/" className="color-teal">Retour à l'Accueil</Link>
            </div>
        </div>
    );
}

export default ReactRouterExample;