import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = (props) =>{
    return(
        <nav className="nav-wrapper blue darken-4">
            <div className="container">
                <Link to='/' className="brand-logo">Eurosport</Link>
            </div>
        </nav>

    )
}

export default Navbar;