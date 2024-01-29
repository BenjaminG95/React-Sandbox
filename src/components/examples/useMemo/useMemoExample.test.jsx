import React from "react";
import {fireEvent, render, screen} from "@testing-library/react"; // Importe les fonctions de test
import MemoExample from "./useMemoExample"; // Importe le composant à tester

describe('MemoExample Component', () => {
    test('affiche la longueur de la chaîne mémorisée', () => {
        // Monter le composant
        render(<MemoExample />);

        // Trouver l'élément d'entrée et simuler une saisie utilisateur
        const inputElement = screen.getByRole('textbox'); // Récupère l'input du composant
        fireEvent.change(inputElement, { target: { value: 'test' } }); // Simule la saisie du texte "test" dans l'input

        // Vérifier si la longueur affichée correspond à la longueur de la chaîne saisie
        expect(screen.getByText('Longueur de la chaîne mémorisée : 4')).toBeInTheDocument();
    });
});
