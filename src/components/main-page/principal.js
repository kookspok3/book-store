import React from "react";
import { Link } from 'react-router-dom';

const Principal = ()=>{
    return(
        <main class="books-grid">

            <section class="carousel">
                <div class="slides">
                    <div class="slide"><a href=""></a></div>
                    <div class="slide"><a href=""></a></div>
                    <div class="slide"><a href=""></a></div>
                </div>
            </section>

            <section class="best-sellers">
                <h3>Más Vendidos</h3>
                <div class="best-sellers-row">
                    <a href="" class="book-card">
                        <div className="book-img">
                            <img src="/images/bookCover.jpeg" alt="Nuevo Libro 2"></img>
                        </div>
                        <div class="book-info">
                            <h4 class="book-name">Lorem</h4>
                            <h5 class="book-price">$19.99</h5>
                            <p class="book-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </a>
                    <a href="" class="book-card">
                        <div  class="book-img">
                            <img src="/images/bookCover.jpeg" alt="Libro Más Vendido 2"></img>
                        </div>
                        <div class="book-info">
                            <h4 class="book-name">Lorem</h4>
                            <h5 class="book-price">$15.99</h5>
                            <p class="book-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </a>
                    <a href="" class="book-card">
                        <div  class="book-img">
                            <img src="/images/bookCover.jpeg" alt="Libro Más Vendido 2"></img>
                        </div>
                        <div class="book-info">
                            <h4 class="book-name">Lorem</h4>
                            <h5 class="book-price">$22.50</h5>
                            <p class="book-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </a>
                    <a href="" class="book-card">
                        <div  class="book-img">
                            <img src="/images/bookCover.jpeg" alt="Libro Más Vendido 2"></img>
                        </div>
                        <div class="book-info">
                            <h4 class="book-name">Lorem</h4>
                            <h5 class="book-price">$18.30</h5>
                            <p class="book-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </a>
                </div>
                <div class="see-more">
                    <Link to="/best-sellers" class="btn-see-more">Ver más...</Link>
                </div>
            </section>

            <section class="new-arrivals">
                <h3>Novedades</h3>
                <div class="new-arrivals-row">
                    <a href="" class="book-card">
                        <div  class="book-img">
                            <img src="/images/bookCover.jpeg" alt="Libro Más Vendido 2"></img>
                        </div>
                        <div class="book-info">
                            <h4 class="book-name">Lorem</h4>
                            <h5 class="book-price">$21.99</h5>
                            <p class="book-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </a>
                    <a href="" class="book-card">
                        <div className="book-img">
                            <img src="/images/bookCover.jpeg" alt="Nuevo Libro 2"></img>
                        </div>
                        <div class="book-info">
                            <h4 class="book-name">Lorem</h4>
                            <h5 class="book-price">$16.99</h5>
                            <p class="book-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </a>
                    <a href="" class="book-card">
                        <div  class="book-img">
                            <img src="/images/bookCover.jpeg" alt="Libro Más Vendido 2"></img>
                        </div>
                        <div class="book-info">
                            <h4 class="book-name">Lorem</h4>
                            <h5 class="book-price">$24.50</h5>
                            <p class="book-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </a>
                    <a href="" class="book-card">
                        <div  class="book-img">
                            <img src="/images/bookCover.jpeg" alt="Libro Más Vendido 2"></img>
                        </div>
                        <div class="book-info">
                            <h4 class="book-name">Lorem</h4>
                            <h5 class="book-price">$19.75</h5>
                            <p class="book-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </a>
                </div>
                <div class="see-more">
                    <Link to="/new-arrivals" class="btn-see-more">Ver más...</Link>
                </div>
            </section>

            <section class="critically-acclaimed">
                <h3>Aclamados por la Crítica</h3>
                <div class="critically-acclaimed-row">
                    <a href="" class="book-card">
                        <div  class="book-img">
                            <img src="/images/bookCover.jpeg" alt="Libro Más Vendido 2"></img>
                        </div>
                        <div class="book-info">
                            <h4 class="book-name">Lorem</h4>
                            <h5 class="book-price">$17.99</h5>
                            <p class="book-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </a>
                    <a href="" class="book-card">
                        <div  class="book-img">
                            <img src="/images/bookCover.jpeg" alt="Libro Más Vendido 2"></img>
                        </div>
                        <div class="book-info">
                            <h4 class="book-name">Lorem</h4>
                            <h5 class="book-price">$22.99</h5>
                            <p class="book-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </a>
                    <a href="" class="book-card">
                        <div  class="book-img">
                            <img src="/images/bookCover.jpeg" alt="Libro Más Vendido 2"></img>
                        </div>
                        <div class="book-info">
                            <h4 class="book-name">Lorem</h4>
                            <h5 class="book-price">$20.50</h5>
                            <p class="book-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </a>
                    <a href="" class="book-card">
                        <div  class="book-img">
                            <img src="/images/bookCover.jpeg" alt="Libro Más Vendido 2"></img>
                        </div>
                        <div class="book-info">
                            <h4 class="book-name">Lorem</h4>
                            <h5 class="book-price">$18.75</h5>
                            <p class="book-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </a>
                </div>
                <div class="see-more">
                    <Link to="/critycally-acclaimed" class="btn-see-more">Ver más...</Link>
                </div>
            </section>

            <section class="featured-authors">
                <h3 class="section-title">Autores Destacados</h3>
                <div class="authors-grid">
                    <Link to="/garcia-marquez" class="author-card">
                        <div class="author-img-container">
                            <img src="/images/GarciaMarquez.jpeg" alt="Gabriel García Márquez" class="author-img"></img>
                        </div>
                        <div class="author-info">
                            <h4 class="author-name">Gabriel García Márquez</h4>
                            <p class="author-description">Autor colombiano, ganador del Nobel, famoso por "Cien años de soledad".</p>
                        </div>
                    </Link>
                    <Link to="/isabel-allende"  class="author-card">
                        <div class="author-img-container">
                            <img src="/images/IsabelAllende.jpeg" alt="Isabel Allende" class="author-img"></img>
                        </div>
                        <div class="author-info">
                            <h4 class="author-name">Isabel Allende</h4>
                            <p class="author-description">Escritora chilena, destacada por "La casa de los espíritus".</p>
                        </div>
                    </Link>
                    <Link to="/luis-borges"  class="author-card">
                        <div class="author-img-container">
                            <img src="/images/LuisBorges.webp" alt="Jorge Luis Borges" class="author-img"></img>
                        </div>
                        <div class="author-info">
                            <h4 class="author-name">Jorge Luis Borges</h4>
                            <p class="author-description">Célebre escritor argentino de "Ficciones" y "El Aleph".</p>
                        </div>
                    </Link>
                </div>
            </section>


        </main>
    )
}

export default Principal;