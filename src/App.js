import React from 'react';
import {Route} from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'


const App = () => (
  <div>
    <Route path = "/" exact component={HomePage} />
    <Route path = "/login" exact component ={LoginPage} />
    <Route path="/register" exact component={RegisterPage} />
  </div>
)

//<Route path="path/to/component.js" exact={true} render={() => (<div> MyComponent </div>)}
//If exact attribute is not specified, then it matches many of them.
//For Ex: <Route path="/"  /> matches all the url's
//<Route path="/user" /> matches all the /user/xxx routes 
export default App;
