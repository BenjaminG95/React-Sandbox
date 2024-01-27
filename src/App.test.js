import { render, fireEvent, screen } from '@testing-library/react';
import UseStateExample from './examples/useStateExample';

describe('UseStateExamples Component', () => {
  test('Le compteur démarre à 0', () => {
    render(<UseStateExample />);
    const counterText = screen.getByText(/Compteur : 0/i);
    expect(counterText).toBeInTheDocument();
  });

  test('Le compteur s\'incrémente de 1 lors du clic sur le bouton', () => {
    render(<UseStateExample />);
    const button = screen.getByText(/Incrémenter le compteur et tester le useState/i);
    fireEvent.click(button);
    const counterText = screen.getByText(/Compteur : 1/i);
    expect(counterText).toBeInTheDocument();
  });
});
