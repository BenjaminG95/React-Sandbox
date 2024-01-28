import {fireEvent, render, screen} from "@testing-library/react"; // Importe les fonctions de test
import PropsExample from "./propsExample"; // Importe le composant à tester

describe('PropsExample Component', () => {
    test('affiche le message initial', () => {
        render(<PropsExample />); // Rend le composant
        expect(screen.getByText(/Message initial/i)).toBeInTheDocument(); // Vérifie si le texte "Message initial" est présent dans le document
    });

    test('met à jour le message lorsque le nouveau message est soumis', () => {
        render(<PropsExample />); // Rend le composant
        const input = screen.getByRole('textbox'); // Récupère l'input du composant
        const button = screen.getByRole('button', { name: /Utiliser les props/i }); // Récupère le bouton du composant

        fireEvent.change(input, { target: { value: 'Nouveau message' } }); // Simule la saisie du texte "Nouveau message" dans l'input
        fireEvent.click(button); // Simule le clic sur le bouton

        expect(screen.getByText(/Nouveau message/i)).toBeInTheDocument(); // Vérifie si le texte "Nouveau message" est présent dans le document
    });
});