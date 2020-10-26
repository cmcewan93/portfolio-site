import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom';
import MainLayout from './MainLayout'
import DefaultLayout from './DefaultLayout'

// import Main from '../Main/main'
// import Contact from '../Contact/contact'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={MainLayout}></Route>
      <Route path='/contact' component={DefaultLayout}></Route>
    </Switch>
  )
}

export default Routes