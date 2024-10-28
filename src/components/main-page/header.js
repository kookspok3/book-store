import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header class="fixed-top bg-light">
            <div class="container-fluid d-flex justify-content-between align-items-center p-2">
                <div class="logo">
                    <Link  to='/'><img src="/images/logoMicrosoft.png" alt="Logo de Librería" class="img-logo"></img></Link>
                </div>
                <div class="search-bar">
                    <input type="text" class="form-control" placeholder="Buscar libros..."></input>
                </div>
                <div class="user-cart">
                    <Link id="shopping-cart"  to='/shoppingCart'>
                        <div id="carrito"><img src="/images/carrito.png" alt="Carrito"></img><p id="books-carrito">1</p></div>
                    </Link>
                    <Link  to='/myAccount'>
                        <img src="/images/account.png"></img>
                    </Link>
                    <Link to="/sell">
                        <img src="/images/book.png"></img>
                        <span><b>VENDE</b></span>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
