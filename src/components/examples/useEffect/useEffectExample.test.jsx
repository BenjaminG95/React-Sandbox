import React from "react";

import { fireEvent, render, screen } from "@testing-library/react"; // Importe les fonctions de test
import UseEffectExample              from "./useEffectExample"; // Importe le composant à tester

describe('UseEffectExample Component', () => {
    test('mise à jour du titre du document à chaque incrémentation', () => {
        render(<UseEffectExample/>);
        const button = screen.getByRole('button', {name: /Utiliser useEffect\( \)/i}); // Récupère le bouton du composant

        // Simule le clic sur le bouton et vérifie si le titre du document est mis à jour correctement
        fireEvent.click(button);
        expect(document.title).toBe('Vous avez cliqué 1 fois'); // Vérifie si le titre du document est mis à jour correctement

        fireEvent.click(button); // Simule le clic sur le bouton et vérifie si le titre du document est mis à jour correctement
        expect(document.title).toBe('Vous avez cliqué 2 fois'); // Vérifie si le titre du document est mis à jour correctement
    });
});