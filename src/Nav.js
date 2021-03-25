import React, { useEffect, useState } from 'react';
import './Nav.css';
import account_img from './assets/account.svg';
import netflix_logo from './assets/netflix_logo.svg'

function Nav(){
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener('scroll');
        };
    }, []);
    return(
        <div>
            <h1 className={`nav ${show && "nav__black"}`}>
                <img className="nav__logo" src={netflix_logo} alt="Netflix Logo"/>

                <img className="nav__avatar" src={account_img} alt="User avatar"/>
            </h1>
        </div>
    );
}

export default Nav;