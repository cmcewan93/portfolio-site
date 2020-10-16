import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom';
import Main from '../Main/main'
import Contact from '../Contact/contact'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Main}></Route>
      <Route path='/contact' component={Contact}></Route>
    </Switch>
  )
}

export default Routes