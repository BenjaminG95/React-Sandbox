import {Link} from "react-router-dom";

function reactResources() {
    return (<>
            <div className="flex flex-col items-center justify-center bg-gradient-to-r from-teal-500 to-indigo-500 rounded-lg p-6 shadow-lg text-white transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl space-y-10">
            <h2 className="my-2 text-2xl font-bold">Ressources React</h2>
            <p className="text-sm mt-4">
                Quelques ressources liées à React!
            </p>
            <Link className="bg-cyan-400 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded mt-4"
                  to="/react-resources">
                Ressources React
            </Link>
        </div>
    </>);
}

export default reactResources;

