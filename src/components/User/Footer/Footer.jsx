import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./../../../assets/images/logo.png";
import './../../../styles/footer.css';

const Footer = () => {
    return ( 
        <footer className='footer st3'>
            <Link to='/' className="logo">
              <img src={logo} alt="" />
              <p className="logo-text foot">Levo</p>
            </Link>
            <p>created by : emad maleki | CopyRight 2022</p>
        </footer>
    );
}
 
export default Footer;