import React from 'react';

import Header from '../../components/shared/Header/header'
import Footer from '../../components/shared/Footer/footer'
import Routes from './routes'

import '../shared/shared.scss';

const App = props => {
  return (
    <div className="site-container">
      <Header/>
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
