import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'; // import du router pour la navigation

import Header from "./layouts/header"; // import du composant header
import Home from "./pages/home";
import Footer from "./layouts/footer";
import ReactRouterExample from "./pages/reactRouterExample";
import ReactRouterWithParamExample from "./pages/reactRouterWithParamExample";
import ReactResources from "./pages/reactResources"; // import du composant main

// fonction principale de l'application
function App() {
    return (
        // Utilisation du composant Router de React Router
        <BrowserRouter basename={'/React-Sandbox'}>
            {/* Wrapper div avec la classe 'App' pour appliquer des styles globaux */}
            <div className={'App bg-gray-100'}>
                {/* Le Header est inclus en haut de toutes les pages */}
                <Header/>
                {/* Configuration des Routes de l'application */}
                <Routes>
                    {/*route de la page d'accueil, Lorsque l'URL correspond à '/', le composant Home est rendu */}
                    <Route path="/" element={<Home/>}/>
                    {/* Route pour la page de démonstration de React Router, Lorsque l'URL correspond à
                    '/routerExample', le composant RouterExample est rendu */}
                    <Route path="/router-example" element={<ReactRouterExample/>}/>
                    <Route path="/router-example/:param" element={<ReactRouterWithParamExample/>}/>
                    <Route path="/react-resources" element={<ReactResources/>}/>
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App; // export de la fonction principale
// l'export sert à rendre la fonction accessible dans d'autres fichiers
// ici, nous exportons la fonction App pour qu'elle soit accessible dans le fichier index.js
// et pouvoir l'injecter dans le DOM.
