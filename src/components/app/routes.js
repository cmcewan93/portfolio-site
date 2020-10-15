import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom';
import Main from '../Main/main'

const Routes = () => {
  return (
    <Switch>
      <Route path='/' component={Main}></Route>
    </Switch>
  )
}

export default Routes