
import './App.css';
import Homepage from './pages/Homepage';
import ShopPage from "./pages/shop/Shop"
import {Switch,Route} from "react-router-dom"
import Header from "./components/header/Header"
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp';
import {auth} from "./firebase/firebase"
import React from 'react';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }
unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});

      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){

  return (
    <div className="">
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path="/" component={Homepage} />
     
        <Route  path="/shop" component={ShopPage} />

<Route path="/signin" component={SignInAndSignUp}/>
        
     
     


</Switch>
    </div>
  );
}
}

export default App;
