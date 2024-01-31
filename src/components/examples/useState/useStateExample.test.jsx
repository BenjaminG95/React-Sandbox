import React                         from "react";
import { fireEvent, render, screen } from "@testing-library/react"; // Importe les fonctions de test
import UseStateExample               from "./useStateExample"; // Importe le composant à tester

describe('UseStateExamples Component', () => {
    test('Le compteur démarre à 0', () => {
        render(<UseStateExample/>); // Rend le composant
        const counterText = screen.getByText(/Compteur actuel : 0/i); // Récupère le texte "Compteur : 0"
        expect(counterText).toBeInTheDocument(); // Vérifie si le texte "Compteur : 0" est présent dans le document
    });

    test('Le compteur s\'incrémente de 1 lors du clic sur le bouton', () => {
        render(<UseStateExample/>); // Rend le composant
        const button = screen.getByRole('button', {name: /Utiliser useState\( \)/i}); // Récupère le bouton
        fireEvent.click(button); // Simule le clic sur le bouton
        const counterText = screen.getByText(/Compteur actuel : 1/i); // Vérifie si le texte "Compteur : 1" est présent dans le document après le clic
        expect(counterText).toBeInTheDocument(); // Vérifie si le texte "Compteur : 1" est présent dans le document après le clic
    });
});