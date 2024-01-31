import React                         from "react";
import { fireEvent, render, screen } from "@testing-library/react"; // Importe les fonctions de test
import UseReducerExample             from "./useReducerExample"; // Importe le composant à tester

describe('UseReducerExample Component', () => {
    test('incrémenter et décrémenter le compteur', () => {
        // Monter le composant
        render(<UseReducerExample/>);

        // Trouver les boutons
        const incrementButton = screen.getByRole('button', {name: 'Incrémenter'}); // Récupère le bouton "Incrémenter"
        const decrementButton = screen.getByRole('button', {name: 'Décrémenter'}); // Récupère le bouton "Décrémenter"

        // Simuler des clics et vérifier la mise à jour de l'état
        fireEvent.click(incrementButton); // Simule le clic sur le bouton "Incrémenter"
        expect(screen.getByText('Compteur : 1')).toBeInTheDocument(); // Vérifie si le texte "Compteur : 1" est présent dans le document

        fireEvent.click(decrementButton); // Simule le clic sur le bouton "Décrémenter"
        expect(screen.getByText('Compteur : 0')).toBeInTheDocument(); // Vérifie si le texte "Compteur : 0" est présent dans le document
    });
});