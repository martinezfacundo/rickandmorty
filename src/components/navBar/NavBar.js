import './NavBar.css'
import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
    return(
        <div className='container-general-navbar'>
            <div className='navbar-container'>
                <div className='brand-container'>
                    <Link className='link-brand' to='/'><h1 className='brand'>Rick & Morty <span>API Game</span></h1></Link>  
                </div>
                <nav className='nav-container'>
                    <Link className='link' to='/'>home</Link>
                    <Link className='link' to='/random-characters'>Random</Link>
                    <Link className='link' to='/search-characters'>Search</Link>
                </nav>
            </div>
        </div>
    )
}

export default NavBar