import React from 'react';
import { useParams } from 'react-router-dom';
import MealInProgress from '../components/MealInProgress';
import DrinkInProgress from '../components/DrinkInProgress';

export default function RecipeInProgress() {
  const { type } = useParams();

  return (
    <div>
      {type === 'meals' ? <MealInProgress /> : <DrinkInProgress />}
      {/* Renderiza o componente correspondente ao tipo de receita */}
      <div>
        <h2>Receita em andamento</h2>
        <p>{recipe.strMeal || recipe.strDrink}</p>
      </div>
    </div>
  );
}
