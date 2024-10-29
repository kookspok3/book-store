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
import BestSellers from './components/sections/best-sellers';
import NewArrivals from './components/sections/new-arrivals';
import CritycallyAcclaimed from './components/sections/critically-acclaimed';
import LuisBorges from './components/autors/luis-borges';
import IsabelAllende from './components/autors/isabel-allende';
import GarciaMarquez from './components/autors/garcia-marquez';


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
          <Route path="/critycally-acclaimed" component={CritycallyAcclaimed}></Route>
          <Route path="/new-arrivals" component={NewArrivals}></Route>
          <Route path="/best-sellers" component={BestSellers}></Route>
          <Route path="/garcia-marquez" component={GarciaMarquez}></Route>
          <Route path="/isabel-allende" component={IsabelAllende}></Route>
          <Route path="/luis-borges" component={LuisBorges}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
