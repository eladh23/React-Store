import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail'; 
import NoPage from './components/NoPage';
import Footer from './components/Footer';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products/:id" component={ProductDetail} />
          <Route component={NoPage} />
          <Route path="/login" component={Login}></Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
