import React from 'react';
import HomePage from './components/HomePage';
import Header from './components/Header';
import FilterComponent from './components/FilterComponent/FilterComponent';
import ProductComponent from './components/ProductComponent/ProductComponent';
import ProductList from './components/ProductList/ProductList';
import ChromeFeatures from './components/ChromeFeatures/ChromeFeatures';



function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <FilterComponent />
      <ProductComponent />
      <ProductList />
      <ChromeFeatures />
     
      
 
    </div>
  );
}

export default App;
