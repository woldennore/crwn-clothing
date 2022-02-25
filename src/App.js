import React, {useEffect} from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUppage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { connect } from 'react-redux';
import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector} from 'reselect';
import CheckoutPage from './pages/checkout/checkout.component';

const App = ({ checkUserSession,currentUser }) => {

  useEffect(() =>{
    checkUserSession();
  },[checkUserSession]);

    return (
      <div>
        <Header  />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={() => currentUser? (<Redirect to ='/' />): <SignInAndSignUppage />} />
        </Switch>
      </div>
    );
  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
