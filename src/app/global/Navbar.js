import React from 'react';
import { Link } from "react-scroll";
import "./style/Navbar.css";

const Navbar = () => {
    return (
        <header className='fixed-top navbar-light bg-light shadow-sm'>
            <nav className="container navbar justify-content-center justify-content-sm-between" id="navbar">
                <a className="navbar-brand d-none d-sm-block" href="/">
                    <img src={process.env.PUBLIC_URL + '/img/favicon.png'} height={'30px'} alt='narengavli logo' />
                </a>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" activeClass="active" to="home" spy={true}
                            offset={-40}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" activeClass="active" to="about" spy={true}
                            offset={-40}>
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" activeClass="active" to="work" spy={true}
                            offset={-40}>
                            Work
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" activeClass="active" to="contact" spy={true}
                            offset={-40}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar