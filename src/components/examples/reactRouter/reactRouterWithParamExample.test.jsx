import React                         from "react";
import { fireEvent, render, screen } from '@testing-library/react'; // Permet de rendre le composant
import { BrowserRouter }             from 'react-router-dom'; // Permet de créer un routeur
import ReactRouterWithParamExample   from './reactRouterWithParamExample'; // Composant à tester

// Helper pour rendre le composant au sein d'un routeur
const renderWithRouter = (ui, {route = '/'} = {}) => {
    window.history.pushState({}, 'Test page', route); // Permet de changer l'URL
    return render(ui, {wrapper: BrowserRouter}); // Rend le composant dans le routeur
};

describe('ReactRouterWithParamExample', () => {
    test('affiche le composant correctement', () => {
        renderWithRouter(<ReactRouterWithParamExample/>); // Rend le composant dans le routeur
        const headingElement = screen.getByRole('heading', {name: /React Router/}); // Récupère le titre
        expect(headingElement).toBeInTheDocument(); // Vérifie que le titre est bien dans le document
    });


    test('affiche un message d\'erreur si le champ est vide et que le bouton est cliqué', () => {
        renderWithRouter(<ReactRouterWithParamExample/>); // Rend le composant dans le routeur
        fireEvent.click(screen.getByText(/React Router avec Param/)); // Clique sur le bouton
        expect(screen.getByText('Remplissez le paramètre')).toBeInTheDocument(); // Vérifie que le message d'erreur est bien dans le document
    });

    test('ne montre pas de message d\'erreur après la saisie de texte dans le champ', () => {
        renderWithRouter(<ReactRouterWithParamExample/>); // Rend le composant dans le routeur
        const input = screen.getByPlaceholderText('Entrez un paramètre'); // Récupère le champ
        fireEvent.change(input, {target: {value: 'test'}}); // Change la valeur du champ
        fireEvent.click(screen.getByText(/React Router avec Param/)); // Clique sur le bouton
        expect(screen.queryByText('Remplissez le paramètre')).toBeNull(); // Vérifie que le message d'erreur n'est pas dans le document
    });
});
