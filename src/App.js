import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Header from './components/main-page/header';
import Navigator from './components/main-page/navigator';
import Principal from './components/main-page/principal';
import Footer from './components/main-page/footer';
import Adventure from './components/categories/adventure';
import Economy from './components/categories/economy';
import Romance from './components/categories/romance';
import PersonalDevelopment from './components/categories/personalDevelopment';
import MyAccount from './components/usser/myAccount';
import ShoppingCart from './components/usser/shoppingCart'
import Sell from './components/usser/sell'
import './styles.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Navigator />
        <Routes>
        <Route path="/" element={<Principal />} />
          <Route path="/adventure" component={Adventure} />
          <Route path="/economy" component={Economy} />
          <Route path="/romance" component={Romance} />
          <Route path="/personal-development" component={PersonalDevelopment} />
          <Route path="/my-account" component={MyAccount} />
          <Route path="/shopping-cart" component={ShoppingCart} />
          <Route path="/sell" component={Sell} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
