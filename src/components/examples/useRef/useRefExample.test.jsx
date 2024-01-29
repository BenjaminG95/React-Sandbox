import React from "react";
import {fireEvent, render, screen} from "@testing-library/react"; // Importe les fonctions de test
import UseRefExample from "./useRefExample"; // Importe le composant à tester

describe('UseRefExample Component', () => {
    test('focus sur l\'input lorsque le bouton est cliqué', () => {
        render(<UseRefExample />); // Rend le composant
        const button = screen.getByRole('button', { name: /Utiliser useRef\( \)/i }); // Récupère le bouton du composant
        const input = screen.getByRole('textbox'); // Récupère l'input du composant

        fireEvent.click(button); // Simule le clic sur le bouton

        // eslint-disable-next-line testing-library/no-node-access
        expect(input).toHaveValue("Hello World"); // Vérifie si la valeur de l'input est "Hello World"
    });
});
