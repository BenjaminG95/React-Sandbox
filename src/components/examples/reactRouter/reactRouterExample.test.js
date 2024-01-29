import { BrowserRouter as Router } from 'react-router-dom'; // Permet de simuler un router pour les tests
import { render, screen } from '@testing-library/react'; // Permet de rendre un composant pour les tests
import ReactRouterExample from './reactRouterExample';// Composant à tester

// Test du composant ReactRouterExample
describe('ReactRouterExample Component', () => {
    // Test de rendu du composant
    test('se rend sans erreur', () => {
        render(
            <Router>
                <ReactRouterExample />
            </Router>
        ); // Rend le composant dans un router
    });

    // Test de la présence d'un élément dans le composant
    test('contient un titre avec le texte "React Router"', () => {
        render(
            <Router>
                <ReactRouterExample />
            </Router>
        ); // Rend le composant dans un router

        // Utilisation de getByRole pour cibler spécifiquement un élément de titre
        const titleElement = screen.getByRole('heading', { name: /React Router/i });
        // Vérification de la présence du titre
        expect(titleElement).toBeInTheDocument();
    });

    // Test de la présence d'un lien dans le composant
    test('contient un lien qui navigue vers /routerExample', () => {
        render(
            <Router>
                <ReactRouterExample />
            </Router>
        ); // Rend le composant dans un router

        // Ciblage spécifique du lien en utilisant getByRole
        const linkElement = screen.getByRole('link', { name: /utiliser react router/i });
        expect(linkElement).toBeInTheDocument(); // Vérification de la présence du lien
        expect(linkElement).toHaveAttribute('href', '/routerExample'); // Vérification de l'attribut href du lien
    });
});
