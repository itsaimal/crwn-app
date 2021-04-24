
import './App.css';
import Homepage from './pages/Homepage';
import ShopPage from "./pages/shop/Shop"
import {Switch,Route,Redirect} from "react-router-dom"
import Header from "./components/header/Header"
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp';

import React, {useEffect} from 'react';

import {selectCurrentUser} from "./redux/user/user.selectors"
//using it for multiple
import {createStructuredSelector} from "reselect"


import {connect} from "react-redux"
import CheckoutPage from "./pages/checkout/CheckoutPage"
import {checkUserSession} from "./redux/user/user.actions"




  

const App = ({ checkUserSession, currentUser }) =>  {
  
  useEffect(() => {
 checkUserSession()
  }, [checkUserSession])
  
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUp />
              )
            }
          />
        </Switch>
      </div>
    );
  }


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);