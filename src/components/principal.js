import React from "react";
import '../styles.css';

const Principal = ()=>{
    return(
        <main class="books-grid">

            <section class="carousel">
                <div class="slides">
                    <div class="slide" style={{backgroundImage: './src/bannerDescuentos.png'}}><a href=""></a></div>
                    <div class="slide" style={{backgroundImage: './src/bannerOctubre.png'}}><a href=""></a></div>
                    <div class="slide" style={{backgroundImage: './src/bannerFirmaDeLibros.png'}}><a href=""></a></div>
                </div>
            </section>

            <section class="best-sellers container">
                <h3>Más Vendidos</h3>
                <div class="best-sellers-row">
                    <div class="book-card">
                        <img src="./src/bookCover.jpeg" alt="Libro Más Vendido 1" class="book-img"></img>
                        <div class="book-info">
                            <h5 class="book-price">$19.99</h5>
                            <p class="book-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div class="book-card">
                        <img src="./src/bookCover.jpeg" alt="Libro Más Vendido 2" class="book-img"></img>
                        <div class="book-info">
                            <h5 class="book-price">$15.99</h5>
                            <p class="book-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div class="book-card">
                        <img src="./src/bookCover.jpeg" alt="Libro Más Vendido 3" class="book-img"></img>
                        <div class="book-info">
                            <h5 class="book-price">$22.50</h5>
                            <p class="book-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div class="book-card">
                        <img src="./src/bookCover.jpeg" alt="Libro Más Vendido 4" class="book-img"></img>
                        <div class="book-info">
                            <h5 class="book-price">$18.30</h5>
                            <p class="book-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
                <div class="see-more">
                    <a href="#" class="btn-see-more">Ver más...</a>
                </div>
            </section>

            <section class="new-arrivals container">
                <h3>Novedades</h3>
                <div class="new-arrivals-row">
                    <div class="book-card">
                        <img src="./src/bookCover.jpeg" alt="Nuevo Libro 1" class="book-img"></img>
                        <div class="book-info">
                            <h5 class="book-price">$21.99</h5>
                            <p class="book-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div class="book-card">
                        <img src="./src/bookCover.jpeg" alt="Nuevo Libro 2" class="book-img"></img>
                        <div class="book-info">
                            <h5 class="book-price">$16.99</h5>
                            <p class="book-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div class="book-card">
                        <img src="./src/bookCover.jpeg" alt="Nuevo Libro 3" class="book-img"></img>
                        <div class="book-info">
                            <h5 class="book-price">$24.50</h5>
                            <p class="book-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div class="book-card">
                        <img src="./src/bookCover.jpeg" alt="Nuevo Libro 4" class="book-img"></img>
                        <div class="book-info">
                            <h5 class="book-price">$19.75</h5>
                            <p class="book-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
                <div class="see-more">
                    <a href="#" class="btn-see-more">Ver más...</a>
                </div>
            </section>

            <section class="critically-acclaimed container">
                <h3>Aclamados por la Crítica</h3>
                <div class="critically-acclaimed-row">
                    <div class="book-card">
                        <img src="./src/bookCover.jpeg" alt="Libro Aclamado 1" class="book-img"></img>
                        <div class="book-info">
                            <h5 class="book-price">$17.99</h5>
                            <p class="book-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div class="book-card">
                        <img src="./src/bookCover.jpeg" alt="Libro Aclamado 2" class="book-img"></img>
                        <div class="book-info">
                            <h5 class="book-price">$22.99</h5>
                            <p class="book-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div class="book-card">
                        <img src="./src/bookCover.jpeg" alt="Libro Aclamado 3" class="book-img"></img>
                        <div class="book-info">
                            <h5 class="book-price">$20.50</h5>
                            <p class="book-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div class="book-card">
                        <img src="./src/bookCover.jpeg" alt="Libro Aclamado 4" class="book-img"></img>
                        <div class="book-info">
                            <h5 class="book-price">$18.75</h5>
                            <p class="book-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
                <div class="see-more">
                    <a href="#" class="btn-see-more">Ver más...</a>
                </div>
            </section>

            <section class="featured-authors container">
                <h3 class="section-title">Autores Destacados</h3>
                <div class="authors-grid">
                    <div class="author-card">
                        <div class="author-img-container">
                            <img src="./src/GarciaMarquez.jpeg" alt="Gabriel García Márquez" class="author-img"></img>
                        </div>
                        <div class="author-info">
                            <h4 class="author-name">Gabriel García Márquez</h4>
                            <p class="author-description">Autor colombiano, ganador del Nobel, famoso por "Cien años de soledad".</p>
                        </div>
                    </div>
                    <div class="author-card">
                        <div class="author-img-container">
                            <img src="./src/IsabelAllende.jpeg" alt="Isabel Allende" class="author-img"></img>
                        </div>
                        <div class="author-info">
                            <h4 class="author-name">Isabel Allende</h4>
                            <p class="author-description">Escritora chilena, destacada por "La casa de los espíritus".</p>
                        </div>
                    </div>
                    <div class="author-card">
                        <div class="author-img-container">
                            <img src="./src/LuisBorges.webp" alt="Jorge Luis Borges" class="author-img"></img>
                        </div>
                        <div class="author-info">
                            <h4 class="author-name">Jorge Luis Borges</h4>
                            <p class="author-description">Célebre escritor argentino de "Ficciones" y "El Aleph".</p>
                        </div>
                    </div>
                </div>
            </section>


        </main>
    )
}

export default Principal;