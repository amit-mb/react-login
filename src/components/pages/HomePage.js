import React from 'react'
import {Link} from 'react-router-dom'
//react-router-dom is for the browser which does not really route the requests to the backend
//but internally routes to different views that we provide so that min requests are made to the backend
//It  mainly works by defining a single <BrowserRouter> tag around the component. In our case,
// <BrowserRouter>
//  <App />
// </BrowserRouter>
//And in App.js, we define various <Route path=""> which will redirect to different views.
//In our case, <Route path is set to "./components/pages/HomePage.js" whenever "/" path is requested
//and <Route path is set to "./components/pages/LoginPage.js" whenever "/login" route is requested, the LoginPage component will show up. Ofc, LoginPage.js has to be inported wherever that route is called

//react-router-dom has three public methods - BrowserRouter, Link and Route
//https://reacttraining.com/react-router/
//https://www.npmjs.com/package/react-router-dom

const HomePage = () => (
    <div>
        <h1>HomePage</h1>
        <Link to="/login">Login</Link>

    </div>
)

export default HomePage