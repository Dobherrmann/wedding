import React, { Component } from 'react';
import '../styles/NavBar.css';
import { withRouter, Link } from 'react-router-dom';

import Logo from '../Logo.png';


class NavBar extends Component {
    state = {
        btnIds: ["id-btn-container-ourstory", "id-btn-container-pics", "id-btn-container-timeline", "id-btn-container-travels", "id-btn-container-hotels"],
        btnTexts: ["Unsere Geschichte", "Fotos", "Ablauf", "Ausflüge", "Übernachtungen"],
        btnClasses: ["button", "button", "button", "button", "button"],
        pageNames: ["/Wedding", "/Pictures", "/Timeline", "/DayTripsV2", "/Sleep"],
        navBarExpended: false,
    }

    // constructor(props) {
    //     super(props);
    // }

    render() {
        const htmlElement = (
            <div className="nav-container">
                <div className="nav-ournames">
                    <img src={Logo} className="our-logo" alt="this is car" />
                </div>
                <button className="burger-button" onClick={() => this._burgerMenue()} />
                <div className="btn-group">
                    < Link to='/Wedding' className="btn-container collapse">{this._createButton(0, "disabled")}</Link>
                    < Link to='/Pictures' className="btn-container collapse">{this._createButton(1)}</Link>
                    < Link to='/Timeline' className="btn-container collapse">{this._createButton(2)}</Link>
                    < Link to='/DayTripsV2' className="btn-container collapse">{this._createButton(3)}</Link>
                    < Link to='/Sleep' className="btn-container collapse">{this._createButton(4)}</Link>
                </div>

            </div >
        );
        this._getActPage();
        return (
            htmlElement
        )
    }


    _burgerMenue() {
        // console.log("BurgerFunc", this.state.navBarExpended)
        const burgerButtonElement = document.getElementsByClassName("burger-button");
        // console.log(burgerButtonElement[0].classList)

        this.state.navBarExpended ? this._collapseBurgerMenue(burgerButtonElement[0]) : this._expandBurgerMenue(burgerButtonElement[0]);


    }

    _expandBurgerMenue(burgerMenueElement) {
        // console.log("Ausklappen")
        this.setState({ navBarExpended: true });
        burgerMenueElement.classList.add("close");

        const navButtons = document.getElementsByClassName("btn-container");
        // console.log("navButtons", navButtons)
        // console.log("<navButtons.length", navButtons.length)
        for (let i = 0; i < navButtons.length; i++) {
            navButtons[i].classList.remove("collapse");
        }
    }


    _collapseBurgerMenue(burgerMenueElement) {
        // console.log("Einklappen")
        this.setState({ navBarExpended: false });
        burgerMenueElement.classList.remove("close");

        const navButtons = document.getElementsByClassName("btn-container");
        // console.log("navButtons", navButtons)
        // console.log("<navButtons.length", navButtons.length)
        for (let i = 0; i < navButtons.length; i++) {
            navButtons[i].classList.add("collapse");
        }
    }






    _createButton(btnIndex, addClass) {
        const burgerButtonElement = document.getElementsByClassName("burger-button");

        return (
            <div className={"btn-underline-container " + addClass} id={this.state.btnIds[btnIndex]}>
                <button type="button" className={[this.state.btnClasses[btnIndex]]} onClick={() => this._collapseBurgerMenue(burgerButtonElement[0])}>{this.state.btnTexts[btnIndex]}</button>
                <div className="underline" />
            </div>
        );
    }

    _getActPage() {
        const actPageURL = this.props.location.pathname;
        for (let i = 0; i < this.state.btnIds.length; i++) {
            const btnElement = document.getElementById(this.state.btnIds[i]);
            if (btnElement !== null && btnElement !== undefined) {
                actPageURL === this.state.pageNames[i] ? btnElement.classList.add("disabled") : btnElement.classList.remove("disabled");
            }
        }
    }
};

export default withRouter(NavBar);