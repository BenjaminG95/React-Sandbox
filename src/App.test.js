// Les tests sont réalisés avec la librairie react-testing-library
// Ils sont réalisés sur les composants de l'application pour vérifier leur bon fonctionnement

import {render, fireEvent, screen} from '@testing-library/react'; // Importe les fonctions de la librairie react-testing-library
import UseStateExample from './examples/useStateExample'; // Importe le composant UseStateExample
import UseRefExample from './examples/UseRefExample'; // Importe le composant UseRefExample
import UseEffectExample from './examples/UseEffectExample'; // Importe le composant UseEffectExample
import UseCallbackExample from "./examples/useCallbackExample"; // Importe le composant UseCallbackExample
import PropsExample from "./examples/propsExample"; // Importe le composant PropsExample

// Tests pour le composant UseStateExample
describe('UseStateExamples Component', () => {
    test('Le compteur démarre à 0', () => {
        render(<UseStateExample />); // Rend le composant
        const counterText = screen.getByText(/Compteur actuel : 0/i); // Récupère le texte "Compteur : 0"
        expect(counterText).toBeInTheDocument(); // Vérifie si le texte "Compteur : 0" est présent dans le document
    });

    test('Le compteur s\'incrémente de 1 lors du clic sur le bouton', () => {
        render(<UseStateExample />); // Rend le composant
        const button = screen.getByRole('button', { name: /Utiliser useState\( \)/i }); // Récupère le bouton
        fireEvent.click(button); // Simule le clic sur le bouton
        const counterText = screen.getByText(/Compteur actuel : 1/i); // Vérifie si le texte "Compteur : 1" est présent dans le document après le clic
        expect(counterText).toBeInTheDocument(); // Vérifie si le texte "Compteur : 1" est présent dans le document après le clic
    });
});


// Tests pour le composant UseRefExample
describe('UseRefExample Component', () => {
    test('focus sur l\'input lorsque le bouton est cliqué', () => {
        render(<UseRefExample />); // Rend le composant
        const button = screen.getByRole('button', { name: /Utiliser useRef\( \)/i }); // Récupère le bouton du composant
        const input = screen.getByRole('textbox'); // Récupère l'input du composant

        fireEvent.click(button); // Simule le clic sur le bouton

        // eslint-disable-next-line testing-library/no-node-access
        expect(document.activeElement).toBe(input); // Vérifie si l'input est l'élément actif (a le focus)
        expect(input).toHaveValue("Hello World"); // Vérifie si la valeur de l'input est "Hello World"
    });
});

// Tests pour le composant UseEffectExample
describe('UseEffectExample Component', () => {
    test('mise à jour du titre du document à chaque incrémentation', () => {
        render(<UseEffectExample />);
        const button = screen.getByRole('button', { name: /Utiliser useEffect\( \)/i }); // Récupère le bouton du composant

        // Simule le clic sur le bouton et vérifie si le titre du document est mis à jour correctement
        fireEvent.click(button);
        expect(document.title).toBe('Vous avez cliqué 1 fois'); // Vérifie si le titre du document est mis à jour correctement

        fireEvent.click(button); // Simule le clic sur le bouton et vérifie si le titre du document est mis à jour correctement
        expect(document.title).toBe('Vous avez cliqué 2 fois'); // Vérifie si le titre du document est mis à jour correctement
    });
});

// tests pour le composant UseCallbackExample
describe('UseCallbackExample Component', () => {
    test('Le compteur s\'incrémente de 1 lors du clic sur le bouton du composant enfant', () => {
        render(<UseCallbackExample />); // Rend le composant parent
        const button = screen.getByRole('button', { name: /Utiliser useCallback\( \)/i }); // Récupère le bouton du composant parent
        const initialCounterText = screen.getByText(/Compteur actuel : 0/i); // Vérifie si le texte "Compteur actuel : 0" est présent dans le document
        expect(initialCounterText).toBeInTheDocument(); //  Vérifie si le texte "Compteur : 0" est présent dans le document

        fireEvent.click(button); // Simule le clic sur le bouton du composant enfant
        const incrementedCounterText = screen.getByText(/Compteur actuel : 1/i); // Vérifie si le texte "Compteur actuel : 1" est présent dans le document après le clic
        expect(incrementedCounterText).toBeInTheDocument(); // Vérifie si le texte "Compteur actuel : 1" est présent dans le document après le clic
    });
});

// Tests pour le composant PropsExample
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