import {render, fireEvent, screen} from '@testing-library/react';
import UseStateExample from './examples/useStateExample';
import UseRefExample from './examples/UseRefExample';
import UseEffectExample from './examples/UseEffectExample';

// Tests pour le composant UseStateExample
describe('UseStateExamples Component', () => {
    // Test pour vérifier si le compteur commence à 0
    test('Le compteur démarre à 0', () => {
        render(<UseStateExample/>);
        const counterText = screen.getByText(/Compteur : 0/i);
        expect(counterText).toBeInTheDocument();
    });

    // Test pour vérifier si le compteur s'incrémente de 1 lors du clic sur le bouton
    test('Le compteur s\'incrémente de 1 lors du clic sur le bouton', () => {
        render(<UseStateExample/>);
        const button = screen.getByText(/Incrémenter le compteur et tester le useState/i);
        fireEvent.click(button);
        const counterText = screen.getByText(/Compteur : 1/i);
        expect(counterText).toBeInTheDocument();
    });
});

// Tests pour le composant UseRefExample
describe('UseRefExample Component', () => {
    // Test pour vérifier que l'input reçoit le focus après le clic sur le bouton
    test('focus sur l\'input lorsque le bouton est cliqué', () => {
        render(<UseRefExample/>);
        const button = screen.getByText(/Focus sur l'input et tester le useRef/i);
        const input = screen.getByRole('textbox');

        fireEvent.click(button); // Simule le clic sur le bouton

        expect(document.activeElement).toBe(input); // Vérifie si l'input est le document actif (a le focus)
        expect(input.value).toBe("Hello World"); // Vérifie si la valeur de l'input est "Hello World"
    });
});

// Tests pour le composant UseEffectExample
describe('UseEffectExample Component', () => {
    // Test pour vérifier la mise à jour du titre du document après chaque incrémentation
    test('mise à jour du titre du document à chaque incrémentation', () => {
        render(<UseEffectExample/>);
        const button = screen.getByText(/Incrémenter le compteur et tester le useEffect/i);

        fireEvent.click(button); // Simule le clic sur le bouton
        expect(document.title).toBe("Vous avez cliqué 1 fois"); // Vérifie si le titre du document est mis à jour après un clic

        fireEvent.click(button); // Simule un autre clic sur le bouton
        expect(document.title).toBe("Vous avez cliqué 2 fois"); // Vérifie si le titre du document est mis à jour après un deuxième clic
    });
});
