import React from 'react';

import Header from '../../components/shared/header/header'
import Footer from '../../components/shared/footer/footer'
import Routes from './routes'

import './App.css';

const App = props => {
  return (
    <div className="App">
      <Header/>
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
