import {fireEvent, render, screen} from "@testing-library/react"; // Importe les fonctions de test
import UseContextExample, {ThemeContext} from "./useContextExample"; // Importe le composant à tester

describe('UseContextExample Component', () => {
    test('change le thème et affiche le thème actuel', () => {
        // Monter le composant dans le Provider
        render(
            <ThemeContext.Provider value="light">
                <UseContextExample />
            </ThemeContext.Provider>
        ); // Rend le composant dans le contexte "light"

        // Trouver le bouton et simuler un clic pour changer le thème
        const buttonElement = screen.getByRole('button', { name: 'Utiliser UseContext( )' }); // Récupère le bouton du composant
        fireEvent.click(buttonElement); // Simule le clic sur le bouton

        // Vérifie si le texte "thème actuel : dark" est présent dans le document
        expect(screen.getByText(/thème actuel : dark/i)).toBeInTheDocument();
    });
});