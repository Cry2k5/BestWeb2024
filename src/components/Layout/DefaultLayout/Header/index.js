import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { useState, useEffect } from 'react';
// import images from '~/assert/images';

const cx = classNames.bind(styles);

function Header({ onClick = false }) {
    const [bg, setBg] = useState('');
    const props = {
        onClick,
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    window.addEventListener('scroll', () => {
        var y = window.scrollY;
        if (y > 20) {
            setBg('bacground-color');
        } else {
            setBg('');
        }
    });

    return (
        <header className={cx('container-fluid', 'header', bg)}>
            <nav className={cx('navbar', 'navbar-expand-sm', 'pt-1', 'pb-1', 'mx-sm-5')}>
                <Link className={cx('navbar-brand', 'text-white')} to="/">
                    LOGO
                    {/* <img src={images.logo} alt="error"></img> */}
                </Link>
                <button
                    className={cx('navbar-toggler', 'my_navbar_toggler')}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mynavbar"
                >
                    <span className={cx('navbar-toggler-icon')}></span>
                </button>
                <div className={cx('collapse ', 'navbar-collapse', 'my_navbar-collapse')} id="mynavbar">
                    <ul className={cx('navbar-nav', 'me-auto', 'my_navbar-nav')}>
                        <li className={cx('nav-item')}>
                            <Link className={cx('nav-link', 'my-nav-link')} to="/">
                                HOME
                            </Link>
                        </li>
                        <li className={cx('nav-item', 'dropdown')}>
                            <a
                                className={cx('nav-link', 'my-nav-link', 'dropdown-toggle')}
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                            >
                                LOCATIONS
                            </a>
                            <ul className={cx('dropdown-menu ', 'my_dropdown-menu')}>
                                <li>
                                    <a className={cx('dropdown-item')} href="#">
                                        LOCATION 1
                                    </a>
                                </li>
                                <li>
                                    <a className={cx('dropdown-item')} href="#">
                                        LOCATION 2
                                    </a>
                                </li>
                                <li>
                                    <a className={cx('dropdown-item')} href="#">
                                        LOCATION 3
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className={cx('nav-item')}>
                            <Link className={cx('nav-link', 'my-nav-link')} to="/menu">
                                HOTELS
                            </Link>
                        </li>
                        <li className={cx('nav-item')}>
                            <Link className={cx('nav-link', 'my-nav-link')} to="/menu">
                                CONSULTATION
                            </Link>
                        </li>
                    </ul>
                    {/* <form className={cx('d-flex')}>
                        <button {...props} className={cx('btn', 'my_btn')} type="button">
                            Book Now
                        </button>
                    </form> */}
                </div>
            </nav>
        </header>
    );
}

export default Header;
