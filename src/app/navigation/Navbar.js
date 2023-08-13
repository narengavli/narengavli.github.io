import { useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

// import css
import styles from './styles/navbar.module.css';

// import icon
import MenuIcon from './../../icons/MenuIcon';
import GmailIcon from './../../icons/GmailIcon';

const pages = [
    { name: 'Home', path: 'home' },
    { name: 'Resume', path: 'resume' },
    { name: 'Project', path: 'project' },
    { name: 'Contact', path: 'contact' },
];

const Navbar = () => {
    const [isResponsive, setIsResponsive] = useState(false);
    const toggleResponsive = () => {
        setIsResponsive(!isResponsive);
    };

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <header className={styles.header}>
            <div className='container'>
                <nav className={`${styles.navbar} ${isResponsive ? styles.responsive : ''}`}>
                    <div className={styles.menuBox1}>
                        <img src={process.env.PUBLIC_URL + '/img/logo.svg'} height={40} width={160} alt='brand logo' onClick={scrollToTop} style={{ cursor: 'pointer' }} />

                        <button className={styles.barButton} onClick={toggleResponsive}>
                            <MenuIcon size={32} />
                        </button>
                    </div>

                    <div className={styles.menuBox2}>
                        {pages.map((page, index) => {
                            return (
                                <Link to={page.path}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    activeClass={styles.active}
                                    className={styles.navlink}
                                    onClick={toggleResponsive}
                                    key={index}
                                >
                                    {page.name}
                                </Link>
                            );
                        })}
                    </div>

                    <div className={`${styles.menuBox3}`}>
                        <a href='https://mail.google.com/mail/?view=cm&fs=1&to=narendragavli.avm@gmail.com' target='_blank' rel="noreferrer">
                            <button type="button" className="btn btn-primary" name='hireme'><GmailIcon size={16} /> Hire Me</button>
                        </a>
                    </div>
                </nav>
            </div >
        </header >
    );
};

export default Navbar;
