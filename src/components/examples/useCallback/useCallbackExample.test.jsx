import React                         from "react";
import { fireEvent, render, screen } from "@testing-library/react"; // Importe les fonctions de test
import UseCallbackExample            from "./useCallbackExample"; // Importe le composant à tester

describe('UseCallbackExample Component', () => {
    test('Le compteur s\'incrémente de 1 lors du clic sur le bouton du composant enfant', () => {
        render(<UseCallbackExample/>); // Rend le composant parent
        const button = screen.getByRole('button', {name: /Utiliser useCallback\( \)/i}); // Récupère le bouton du composant parent
        const initialCounterText = screen.getByText(/Compteur actuel : 0/i); // Vérifie si le texte "Compteur actuel : 0" est présent dans le document
        expect(initialCounterText).toBeInTheDocument(); //  Vérifie si le texte "Compteur : 0" est présent dans le document

        fireEvent.click(button); // Simule le clic sur le bouton du composant enfant
        const incrementedCounterText = screen.getByText(/Compteur actuel : 1/i); // Vérifie si le texte "Compteur actuel : 1" est présent dans le document après le clic
        expect(incrementedCounterText).toBeInTheDocument(); // Vérifie si le texte "Compteur actuel : 1" est présent dans le document après le clic
    });
});