import React from 'react';
import ReactDOM from 'react-dom/client';  // Updated import
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/app/app';
import * as serviceWorker from './serviceworker';

// const history = createBrowserHistory();
// // Initialize google analytics page view tracking
// history.listen(location => {
//   ReactGA.set({ page: location.pathname }); // Update the user's current page
//   ReactGA.pageview(location.pathname); // Record a pageview for the given page
// });

// const trackingId = "G-RFMVKW540Z"; 
// ReactGA.initialize(trackingId);

// Create a root element and render the app using `createRoot`
const root = ReactDOM.createRoot(document.getElementById('root')); // Create root element
root.render(
  <Router>
    <App />
  </Router>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();