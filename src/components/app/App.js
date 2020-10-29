import React from 'react';

import Header from '../shared/Header/mainHeader'
import Footer from '../../components/shared/Footer/footer'
import Routes from './routes'

import '../shared/shared.scss';
import 'animate.css'
import "aos/dist/aos.css"

const App = props => {
  return (
    <div className="site-container">
      <Routes/>
    </div>
  );
}

export default App;
