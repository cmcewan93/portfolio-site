import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom';
import MainLayout from './main-layout'
import DefaultLayout from './default-layout'
import NotFound from '../shared/not-found/not-found'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={MainLayout}></Route>
      <Route path='/contact' component={DefaultLayout}></Route>
      <Route path="*" component={NotFound}></Route>
    </Switch>
  )
}

export default Routes