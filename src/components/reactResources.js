import {Link} from "react-router-dom";

function reactResources(): JSX.Element {
    return (<>
        <div className={'flex-item'}>
            <h2 className={'my-2'}>Ressources React</h2>
            <Link className={'btn btn-dark-purple decoration-none text-small mt-2'}
                  to={'/react-resources'}>Ressources React</Link>
            <p className={'text-small mt-4'}>Quelques ressources liées à React!</p>
        </div>
    </>);
}

export default reactResources;