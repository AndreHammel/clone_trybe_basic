import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Testes de Trybe Clone', () => {
  it('Verifica se carregando aparece na tela', () => {
    render(<App />);
    const loadingElement = screen.getByText('Carregando...');
    expect(loadingElement).toBeInTheDocument;
  });
});
