import React from 'react';

import Header from '../../components/shared/header/header'
import Footer from '../../components/shared/footer/footer'
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
