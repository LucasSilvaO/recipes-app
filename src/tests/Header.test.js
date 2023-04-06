import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderPath from './helpers/renderPath';
import Meals from '../components/Meals';
import Drinks from '../components/Drinks';
import Profile from '../pages/Profile';
// import DoneRecipes from '../pages/DoneRecipes';
// import FavoriteRecipes from '../pages/FavoriteRecipes';

describe('Teste de funcionalidade do componente Header', () => {
  const searchTopBtn = 'search-top-btn';
  const profileTopBtn = 'profile-top-btn';
  const pageTitle = 'page-title';
  const inputSearch = 'search-input';

  test('Os componentes estão na tela da página Meals', () => {
    render(<Meals />);

    const searchBtn = screen.getByTestId(searchTopBtn);
    const profileBtn = screen.getByTestId(profileTopBtn);
    const pageTl = screen.getByTestId(pageTitle);

    expect(searchBtn).toBeInTheDocument();
    expect(profileBtn).toBeInTheDocument();
    expect(pageTl).toBeInTheDocument();
  });

  test('Os componentes estão na tela da página Drinks', () => {
    render(<Drinks />);

    const searchBtn = screen.getByTestId(searchTopBtn);
    const profileBtn = screen.getByTestId(profileTopBtn);
    const pageTl = screen.getByTestId(pageTitle);

    expect(searchBtn).toBeInTheDocument();
    expect(profileBtn).toBeInTheDocument();
    expect(pageTl).toBeInTheDocument();
  });

  test('Os componentes estão na tela da página Profile', () => {
    render(<Profile />);

    const profileBtn = screen.getByTestId(profileTopBtn);
    const pageTl = screen.getByTestId(pageTitle);

    expect(profileBtn).toBeInTheDocument();
    expect(pageTl).toBeInTheDocument();
  });

  test('Ao clicar no botão ProfileBtn, é redirecionado para a página Profile', () => {
    renderPath('/meals');

    const profileBtn = screen.getByTestId(profileTopBtn);
    userEvent.click(profileBtn);

    const profileTitle = screen.getByText('Profile');

    expect(profileTitle).toBeInTheDocument();
  });

  test('Aparece um input de pesquisa ao clicar no botão search e desaparece se clicar novamente', () => {
    renderPath('/meals');

    const searchBtn = screen.getByTestId(searchTopBtn);
    expect(searchBtn).toBeInTheDocument();
    userEvent.click(searchBtn);

    const searchChange = screen.getByTestId(inputSearch);
    expect(searchChange).toBeInTheDocument();

    userEvent.click(searchBtn);
    expect(searchChange).not.toBeInTheDocument();
  });

  test('Ao digitar no Input search ele adiciona o valor', () => {
    renderPath('/meals');

    const searchBtn = screen.getByTestId(searchTopBtn);
    userEvent.click(searchBtn);

    const searchChange = screen.getByTestId(inputSearch);
    userEvent.type(searchChange, 'sushi');
    expect(searchChange).toHaveValue('sushi');
  });
});
