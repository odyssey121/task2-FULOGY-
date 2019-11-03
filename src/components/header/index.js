import React, { PureComponent } from "react";
import logo_png from '../../image/logo.jpg';
import { bottomData } from "../../data";
import './header.css';

const Header = () => (
    <header id='header'>
        <div className='leftArea'>
            <img src={logo_png} alt='logo'></img>
        </div>
        <div className='rightArea'>
            <input type='checkbox' id='bind'></input>
            <label htmlFor='bind'></label>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <nav className='link-menu'>
                <a href='#'>ПУНКТ</a>
                <a href='#'>ПУНКТ</a>
                <a href='#'>ПУНКТ</a>
                <a href='#'>ПУНКТ</a>
                <a href='#'>ПУНКТ</a>
                <a href='#'>ПУНКТ</a>
                <a href='#'>ПУНКТ</a>
                <a href='#'>ПУНКТ</a>
                <a href='#'>ПУНКТ</a>
                <a href='#'>ПУНКТ</a>
                <a href='#'>ПУНКТ</a>
                <a href='#'>ПУНКТ</a>
                <a href='#'>ПУНКТ</a>
                <a href='#'>ПУНКТ</a>
                <a href='#'>ПУНКТ</a>
                <a href='#'>ПУНКТ</a>
                <a href='#'>ПУНКТ</a>
                <a href='#'>ПУНКТ</a>
                <a href='#'>ПУНКТ</a>
                <a href='#'>ПУНКТ</a>
                <a href='#'>ПУНКТ</a>
                <a href='#'>ПУНКТ</a>
                <a href='#'>ПУНКТ</a>
                <a href='#'>ПУНКТ</a>
                <a href='#'>ПУНКТ</a>
                <a href='#'>ПУНКТ</a>
            </nav>

        </div>
    </header>
)

export default Header;