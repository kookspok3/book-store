import React from 'react';
import '../styles.css'; // Asegúrate de que tu CSS esté aquí o ajusta la ruta

const Header = () => {
    return (
        <header class="fixed-top bg-light">
            <div class="container-fluid d-flex justify-content-between align-items-center p-2">
                <div class="logo">
                    <a href=""><img src="./src/logoMicrosoft.png" alt="Logo de Librería" class="img-logo"></img></a>
                </div>
                <div class="search-bar">
                    <input type="text" class="form-control" placeholder="Buscar libros..."></input>
                </div>
                <div class="user-cart">
                    <a id="shopping-cart" href="#">
                        <div id="carrito"><img src="./src/carrito.png" alt="Carrito"></img><p id="books-carrito">1</p></div>
                        <span id="name-carrito">Carrito</span>
                    </a>
                    <a href="#">
                        <img src="./src/account.png"></img>
                        <span>Mi cuenta</span>
                    </a>
                    <a href="#">
                        <img src="./src/book.png"></img>
                        <span>Vende libros</span>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
