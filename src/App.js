
import './App.css';
import Homepage from './pages/Homepage';
import ShopPage from "./pages/shop/Shop"
import {Switch,Route,Redirect} from "react-router-dom"
import Header from "./components/header/Header"
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp';
import {auth, createUserProfileDocument} from "./firebase/firebase"
import React from 'react';
import {setCurrentUser} from "./redux/user/user.actions" 

import {connect} from "react-redux"
  

class App extends React.Component {
 
  unsubscribeFromAuth = null;

  componentDidMount() {
const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
         setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state);
         
        });
      }

      setCurrentUser( userAuth );
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render(){

  return (
    <div className="">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
     
        <Route  path="/shop" component={ShopPage} />

<Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to="/"/>) : (<SignInAndSignUp/>)}/>
        
     
     


</Switch>
    </div>
  );
}
}
 

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
