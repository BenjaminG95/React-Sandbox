import {Link} from "react-router-dom";

// Exemple de composant React Router
function ReactRouterExample() {
    return (<>
        <div className={'App-main'}>
            <h2>Exemple de React Router</h2>
            <p className={'text-small'}>Cette page est un exemple de la façon d'utiliser React Router dans une application React.</p>
            <a className={'color-teal text-small my-2'}
               href={'https://github.com/BenjaminG95/React-Sandbox/blob/main/src/pages/reactRouterExample.js'}
               target={"_blank"}
               rel="noreferrer">Code source de la page reactRouterExample.js</a>
            <div className="navigation-links">
                <Link to="/" className={'color-teal text-small'}>Retour à l'Accueil</Link>
            </div>
        </div>
</>);
}

export default ReactRouterExample;