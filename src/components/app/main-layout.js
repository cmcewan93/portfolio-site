import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom';
import MainHeader from '../shared/Header/mainheader'
import Footer from '../shared/Footer/footer'
import Main from '../Main/main'

//This is the Layout for the main content page

const MainLayout = () => {
  return (
    <div>
      <MainHeader />
        <Switch>
          <Route exact path='/' component={Main} />
        </Switch>
      <Footer />
    </div>
  )
}

export default MainLayout