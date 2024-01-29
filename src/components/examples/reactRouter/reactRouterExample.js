// voir Pages/reactRouterExample.js pour plus d'explications

import { Link } from "react-router-dom"; // Importer Link de react-router-dom

function reactRouterExample () : JSX.Element {
    return (<>
        <div className={'flex-column flex-item'}>
            <h2>React Router</h2>
            <Link className={'btn btn-light-blue decoration-none'} to={'routerExample'} >
                Utiliser React Router
            </Link>

        </div>
    </>);
}

export default reactRouterExample;