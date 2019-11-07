import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from'react-router-dom';

import {Route,Switch} from 'react-router-dom';
import AboutUs from "./components/HomePage/Footer/AboutUs/AboutUs";
import ContactUs from "./components/HomePage/Footer/ContactUs/ContactUs";
import PrivacyPolicy from "./components/HomePage/Footer/PrivacyPolicy/PrivacyPolicy";
import App from './App';
import * as serviceWorker from './serviceWorker';

const app = (
    <Router>
    <Switch>
        <Route path="/about" component={AboutUs}/>
        <Route path="/contact" component={ContactUs}/>
        <Route path="/policy" component={PrivacyPolicy}/>
        <Route exact path="/" component={App} />
      </Switch>
    </Router>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
