import React from "react";
import './App.css';

import Header from './Header'
import Form from './Form'
import CitiList from './CityList'

function App() {

  return (
    <div className="App">
      <Header />
      <Form />
      <CitiList />
    </div>
  );
}

export default App;
