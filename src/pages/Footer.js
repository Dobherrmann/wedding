import React, { Component } from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';

class Footer extends Component {
    state = {};

    render() {
        return (
            <div className="footer-class">
                < Link to='/Impressum' className="btn-underline-container">
                    <div className="underline" />
                    <button className="impressum-button">Impressum</button>
                </Link>
            </div>
        );
    };
}

export default Footer;