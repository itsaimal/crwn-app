
import './App.css';
import Homepage from './pages/Homepage';
import ShopPage from "./pages/shop/Shop"
import {Switch,Route} from "react-router-dom"
import Header from "./components/header/Header"
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp';


function App() {
  return (
    <div className="">
      <Header/>
      <Switch>
        <Route exact path="/" component={Homepage} />
     
        <Route  path="/shop" component={ShopPage} />

<Route path="/signin" component={SignInAndSignUp}/>
        
     
     


</Switch>
    </div>
  );
}

export default App;
