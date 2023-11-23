import React from 'react';
import AmealoNavBar from './components/AmealoNavBar/AmealoNavBar';
import FilterRecipes from './pages/FilterRecipes';

function App() {
  return (
    <div className="App">
      <AmealoNavBar />
      <FilterRecipes />
    </div>
  );
}

export default App;
