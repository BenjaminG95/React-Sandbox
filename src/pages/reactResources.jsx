import React from 'react';
import { Link } from 'react-router-dom';

// TODO add more resources.

const resources = [
    {"name": "React official documentation", "url": "https://react.dev/learn"},
    {"name": "React.js cheatsheet", "url": "https://devhints.io/react"},
    {"name": "Différents hook prêt à l'emploi", "url": "https://usehooks.com/"},
    {"name": "Documentation Redux", "url": "https://redux.js.org/introduction/getting-started"},
    {"name": "Librairie Material UI", "url": "https://mui.com/material-ui/getting-started/"},
    {"name": "Librairie Ant Design", "url": "https://ant.design/docs/react/getting-started"},
    {"name": "Librairie Tailwind", "url": "https://tailwindcss.com/docs/guides/create-react-app"},
    {"name": "Cheatsheet Tailwind", "url": "https://nerdcave.com/tailwind-cheat-sheet"},
    {"name": "Environnement React online", "url": "https://playcode.io/react"},
    {"name": "CodeWars sur React (exercices / challenges online)", "url": "https://www.codewars.com/collections/reactjs"},
    {"name": "Des challenges sur React", "url": "https://github.com/alexgurr/react-coding-challenges"},
    {"name": "Vidéo d'intro a nextJS (en anglais)", "url": "https://www.youtube.com/watch?v=ZVnjOPwW4ZA"},
    {"name": "React Query", "url": "https://tanstack.com/query/v4/docs/framework/react/overview"},
];
function ReactResources() {
    const resourcesHtml = resources.map(resource => (
        <li key={resource.name}>
            <a href={resource.url}
               target="_blank"
               rel="noopener noreferrer"
               className={'color-teal d-flex'}>
                {resource.name}
            </a>
        </li>
    ));

    return (
        <main className="min-h-screen flex flex-col items-center justify-center text-center">
            <h2>Ressources React</h2>
            <div>
                <ul className={'decoration-none'}>
                    {resourcesHtml}
                </ul>
            </div>

            <div className="navigation-links mt-2">
                <Link to="/" className={'text-cyan-300 hover:text-indigo-800 text-sm my-4'}>Retour à l'Accueil</Link>
            </div>
        </main>
    );
}
export default ReactResources;
