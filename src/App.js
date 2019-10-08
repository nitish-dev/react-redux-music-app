import React,{Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/layouts/Header';
import Index from './components/layouts/Index';
import ViewLyrics from './components/tracks/ViewLyrics';
import 'materialize-css/dist/css/materialize.min.css';
import './app.css';
import {Provider} from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
    <Fragment>
    <Header />
      <div className="container">
      <Router>
        <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/lyrics/track/:id" component={ViewLyrics} />
        </Switch>
      </Router>
      
      </div>
   
    </Fragment>
    </Provider>
  )
}

export default App;
