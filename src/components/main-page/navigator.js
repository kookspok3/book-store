import React from 'react';
import { Link } from 'react-router-dom';

const Navigator = ()=>{
    return(
        <nav class="fixed-left bg-light">
            <h3 class="p-3">Categorías</h3>
            <ul class="nav flex-column">
                <li class="nav-item">
                    <Link  to='/components/adventure' class="nav-link text-dark">Aventura</Link>
                </li>
                <li class="nav-item">
                    <Link to='/components/adventure' class="nav-link text-dark">Economía</Link>
                </li>
                <li class="nav-item">
                    <Link to="/romance" class="nav-link text-dark">Romance</Link>
                </li>
                <li class="nav-item">
                    <Link to="/personalDevelopment" class="nav-link text-dark">Desarrollo Personal</Link>
                </li>
                <li class="nav-item">
                    <Link to="/philosofy" class="nav-link text-dark">Filosofía</Link>
                </li>
            </ul>
        </nav>

    )
}
export default Navigator;