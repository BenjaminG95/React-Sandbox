// Les tests sont réalisés avec la librairie react-testing-library
// Ils sont réalisés sur les composants de l'application pour vérifier leur bon fonctionnement

import {render, fireEvent, screen} from '@testing-library/react'; // Importe les fonctions de la librairie react-testing-library
import UseStateExample from './examples/useStateExample'; // Importe le composant UseStateExample
import UseRefExample from './examples/UseRefExample'; // Importe le composant UseRefExample
import UseEffectExample from './examples/UseEffectExample'; // Importe le composant UseEffectExample
import UseCallbackExample from "./examples/useCallbackExample"; // Importe le composant UseCallbackExample
import PropsExample from "./examples/propsExample"; // Importe le composant PropsExample
import MemoExample from "./examples/useMemoExample"; // Importe le composant MemoExample
import UseContextExample, { ThemeContext } from './examples/UseContextExample'; // Importe le composant UseContextExample et le contexte ThemeContext
import UseReducerExample from "./examples/useReducerExample";
import CustomHookExample from "./examples/customHookExample"; // Assurez-vous que le chemin d'importation est correct

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

// Tests pour le composant MemoExample
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

// Tests pour le composant UseContextExample
describe('UseContextExample Component', () => {
    test('change le thème et affiche le thème actuel', () => {
        // Monter le composant dans le Provider
        render(
            <ThemeContext.Provider value="light">
                <UseContextExample />
            </ThemeContext.Provider>
        ); // Rend le composant dans le contexte "light"

        // Trouver le bouton et simuler un clic pour changer le thème
        const buttonElement = screen.getByRole('button', { name: 'Changer de thème' }); // Récupère le bouton du composant
        fireEvent.click(buttonElement); // Simule le clic sur le bouton

        // Vérifie si le texte "thème actuel : dark" est présent dans le document
        expect(screen.getByText(/thème actuel : dark/i)).toBeInTheDocument();
    });
});

// Tests pour le composant UseReducerExample
describe('UseReducerExample Component', () => {
    test('incrémenter et décrémenter le compteur', () => {
        // Monter le composant
        render(<UseReducerExample/>);

        // Trouver les boutons
        const incrementButton = screen.getByRole('button', { name: 'Incrémenter' }); // Récupère le bouton "Incrémenter"
        const decrementButton = screen.getByRole('button', { name: 'Décrémenter' }); // Récupère le bouton "Décrémenter"

        // Simuler des clics et vérifier la mise à jour de l'état
        fireEvent.click(incrementButton); // Simule le clic sur le bouton "Incrémenter"
        expect(screen.getByText('Compteur : 1')).toBeInTheDocument(); // Vérifie si le texte "Compteur : 1" est présent dans le document

        fireEvent.click(decrementButton); // Simule le clic sur le bouton "Décrémenter"
        expect(screen.getByText('Compteur : 0')).toBeInTheDocument(); // Vérifie si le texte "Compteur : 0" est présent dans le document
    });
});

// Tests pour le composant CustomHookExample
describe('CustomHookExample Component', () => {
    test('incrémenter et décrémenter le compteur', () => {
        // Monter le composant
        render(<CustomHookExample/>);

        // Trouver les boutons
        const incrementButton = screen.getByRole('button', { name: 'Incrémenter' }); // Récupère le bouton "Incrémenter"
        const decrementButton = screen.getByRole('button', { name: 'Décrémenter' }); // Récupère le bouton "Décrémenter"

        // Simuler des clics et vérifier la mise à jour de l'état
        fireEvent.click(incrementButton); // Simule le clic sur le bouton "Incrémenter"
        expect(screen.getByText('Compteur : 1')).toBeInTheDocument(); // Vérifie si le texte "Compteur : 1" est présent dans le document

        fireEvent.click(decrementButton); // Simule le clic sur le bouton "Décrémenter"
        expect(screen.getByText('Compteur : 0')).toBeInTheDocument(); // Vérifie si le texte "Compteur : 0" est présent dans le document
    });
});