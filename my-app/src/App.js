import React from 'react';
import HomePage from './components/HomePage'; // HomePage Component
import Header from './components/Header'; // Header Component
import FilterComponent from './components/FilterComponent/FilterComponent'; // FilterComponent
import ProductComponent from './components/ProductComponent/ProductComponent'; // ProductComponent

function App() {
  return (
    <div className="App">
      <Header /> {/* Render the Header Component */}
      <HomePage /> {/* Render the HomePage Component */}
      <FilterComponent /> {/* Render the FilterComponent */}
      <ProductComponent /> {/* Render the ProductComponent */}
   
    </div>
  );
}

export default App;
