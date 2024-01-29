import {Link} from "react-router-dom";

// Exemple de composant React Router
function ReactRouterExample() {
    return (<>
        <div className={'App-main'}>
            <h2>Ressources React</h2>
            <p className={'text-small m'}>Comming soon.</p>
            <div className="navigation-links mt-2">
                <Link to="/" className={'color-teal text-small'}>Retour à l'Accueil</Link>
            </div>
        </div>
    </>);
}

export default ReactRouterExample;