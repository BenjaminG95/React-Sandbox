// voir components/ReactRouterExample.js pour plus d'explications

import {Link, useParams} from 'react-router-dom';

function ReactRouterWithParamExample() {
    const {param} = useParams();

    return (
        <div>
            <div className={'App-main'}>
                <h2>Le paramètre est '{param}'</h2>
                <a className={'color-teal text-small my-2'}
                   href={'https://github.com/BenjaminG95/React-Sandbox/blob/main/src/pages/reactRouterWithParamExample.js'}
                   target={'_blank'}
                   rel="noreferrer">Code source de la page reactRouterWithParamExample.js</a>
                <div className={'navigation-links'}>
                    <Link to="/" className={'color-teal text-small'}>Retour à l'Accueil</Link>
                </div>
            </div>
        </div>
    );
}

export default ReactRouterWithParamExample;
