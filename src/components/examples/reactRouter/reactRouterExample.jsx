/**
 * React Router est une bibliothèque de routage standard pour React, conçue pour ajouter des capacités de navigation
 * dans une application web utilisant React. Voici ses principales fonctionnalités et utilités :
 *
 * Routage Déclaratif :
 * React Router utilise une approche déclarative pour le routage, ce qui rend le code plus
 * prévisible et plus facile à comprendre. Vous déclarez vos routes comme des composants React,
 * ce qui s'intègre naturellement dans l'écosystème React.
 *
 * Navigation entre les Composants :
 * React Router permet de naviguer entre différents composants dans une application sans recharger
 * la page complète. Cela crée une expérience utilisateur similaire à une application de bureau et améliore
 * les performances en ne rechargeant que les parties nécessaires de l'application.
 *
 * Gestion des URL :
 * Avec React Router, les composants de l'application peuvent correspondre à des chemins d'URL spécifiques.
 * Cela signifie que vous pouvez associer un composant particulier à une URL, permettant ainsi à l'utilisateur
 * de marquer, partager ou revenir à cette URL spécifique.
 *
 * Paramètres Dynamiques de Route :
 * React Router permet de passer des paramètres dynamiques dans les URL. Par exemple,
 * dans une application de blog, vous pouvez avoir une URL comme
 * /posts/:id où :id est l'identifiant d'un article de blog spécifique. React Router extrait ces
 * paramètres d'URL et les rend accessibles dans vos composants.
 *
 * Navigation Programmée :
 * Outre la navigation déclarative via des composants de lien, React Router permet également une navigation
 * programmée. Vous pouvez utiliser des hooks comme useHistory (v5) ou useNavigate (v6) pour naviguer
 * "programmiquement", par exemple, après qu'une action comme la soumission d'un formulaire soit complétée.
 *
 * Sous-routage :
 * React Router facilite la création de sous-routes dans des parties spécifiques de votre
 * application, ce qui est utile pour des fonctionnalités telles que les onglets ou le routage
 * imbriqué dans des composants complexes.
 *
 * Gestion des Redirections :
 * Il est facile de mettre en place des redirections pour gérer des scénarios comme la redirection
 * d'un utilisateur non authentifié loin d'une page protégée ou la redirection d'anciennes URL vers de nouvelles.
 *
 * Lazy Loading : En combinaison avec React.lazy et Suspense, React Router peut être utilisé pour charger
 * à la demande (lazy load) des composants, ce qui peut améliorer considérablement les
 * performances en chargeant du code uniquement lorsque c'est nécessaire.
 *
 */
import React from "react";
import { Link } from "react-router-dom"; // Importer Link de react-router-dom

function reactRouterExample ()  {
    return (<>
        <div className={'flex-column flex-item'}>
            <h2>React Router</h2>
            <Link className={'btn btn-light-blue decoration-none'} to={'router-example'} >
                Utiliser React Router
            </Link>

            <a className={'color-teal text-small mt-2'}
               href={'https://github.com/BenjaminG95/React-Sandbox/blob/main/src/components/examples/reactRouter/reactRouterExample.jsx'}
               target={"_blank"} rel="noreferrer">Code source de reactRouterExample</a>
            <a className={'color-teal text-small mt-2'}
               href={'https://github.com/BenjaminG95/React-Sandbox/blob/main/src/App.js'}
               target={"_blank"} rel="noreferrer">Code source de app.js</a>
        </div>
    </>);
}

export default reactRouterExample;