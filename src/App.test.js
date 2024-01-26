import { render, fireEvent, screen } from '@testing-library/react';
import UseStateExamples from './examples/UseStateExamples';

describe('UseStateExamples Component', () => {
  test('Le compteur démarre à 0', () => {
    render(<UseStateExamples />);
    const counterText = screen.getByText(/Compteur : 0/i);
    expect(counterText).toBeInTheDocument();
  });

  test('Le compteur s\'incrémente de 1 lors du clic sur le bouton', () => {
    render(<UseStateExamples />);
    const button = screen.getByText(/Incrémenter le compteur et tester le useState/i);
    fireEvent.click(button);
    const counterText = screen.getByText(/Compteur : 1/i);
    expect(counterText).toBeInTheDocument();
  });
});
