
import './App.css';
import Homepage from './pages/Homepage';
import ShopPage from "./pages/shop/Shop"
import {Switch,Route} from "react-router-dom"
import Header from "./components/header/Header"
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp';
import {auth, createUserProfileDocument} from "./firebase/firebase"
import React from 'react';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state);
         
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
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
