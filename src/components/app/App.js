import React from 'react';
import Routes from './routes'

import '../shared/shared.scss';
import 'animate.css'
import "aos/dist/aos.css"

require('dotenv').config()

const App = props => {
  return (
    <div className="site-container">
      <Routes/>
    </div>
  );
}

export default App;
