// voir components/ReactRouterExample.js pour plus d'explications

import {Link, useParams} from 'react-router-dom';

function ReatRouterWithParamExample() {
    const {param} = useParams();

    return (
        <div>
            <div className={'App-main'}>
                <h2>Le paramètre est '{param}'</h2>
                <div className="navigation-links">
                    <Link to="/" className="color-teal">Retour à l'Accueil</Link>
                </div>
            </div>
        </div>
    );
}

export default ReatRouterWithParamExample;
