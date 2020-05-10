import React from 'react';
import {Switch,Route} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';//Navbar
import Cart from './components/Cart/Cart';//Cart, fires when user go to the /cart page
import Default from './components/Default';//404 page, fires when user input invalid url
import Details from './components/Details';//details page, it's basically details of product, fires when user click on the product
import ProductList from './components/ProductList';//Page where all our products concentrated
import Modal from './components/Modal';//Modal window, fires when user click add to the cart


class App extends React.Component {
  render() {
    return (
     <React.Fragment>
       <Navbar />
       <Switch>
         <Route exact path='/' component={ProductList} />
         <Route path='/details' component={Details} />
         <Route path='/cart' component={Cart} />
         <Route component={Default} />
       </Switch>
       <Modal />
     </React.Fragment>
    )
  }
}

export default App;
