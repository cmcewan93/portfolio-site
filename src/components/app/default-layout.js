import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom';
import DefaultHeader from '../shared/Header/defaultheader'
import Footer from '../shared/Footer/footer'
import Contact from '../Contact/contact'

//Default layout for all components other than main

const DefaultLayout = () => {
  return (
    <div>
      <DefaultHeader />
        <Switch>
          <Route exact path='/contact' component={Contact} />
        </Switch>
      <Footer />
    </div>
  )
}

export default DefaultLayout