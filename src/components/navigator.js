import React from 'react';
import '../styles.css';

const Navigator = ()=>{
    return(
        <nav class="fixed-left bg-light">
            <h3 class="p-3">Categorías</h3>
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link text-dark" href="#">Aventura</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-dark" href="#">Economía</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-dark" href="#">Romance</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-dark" href="#">Desarrollo Personal</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-dark" href="#">Filosofía</a>
                </li>
            </ul>
        </nav>

    )
}
export default Navigator;