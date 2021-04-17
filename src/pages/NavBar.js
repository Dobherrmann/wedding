import React, { Component } from 'react';
import '../styles/NavBar.css';
import { withRouter, Link } from 'react-router-dom';


class NavBar extends Component {
    state = {}

    constructor(props) {
        super(props);

        this.state = {
            btnIds: ["id-btn-container-ourstory", "id-btn-container-pics", "id-btn-container-timeline", "id-btn-container-travels", "id-btn-container-hotels"],
            btnTexts: ["Unsere Geschichte", "Fotos", "Ablauf", "Ausflüge", "Übernachtungen"],
            btnClasses: ["button", "button", "button", "button", "button"],
            pageNames: ["/", "/Pictures", "/Timeline", "/DayTrips", "/Sleep"]

        };
    }

    render() {
        this._getActPage();
        return (
            <div className="nav-container">
                <div className="nav-ournames">
                    Maria & Thibault
                </div>
                <div className="btn-group">
                    < Link to='/' className="btn-container">{this._createButton(0)}</Link>
                    < Link to='/Pictures' className="btn-container">{this._createButton(1)}</Link>
                    < Link to='/Timeline' className="btn-container">{this._createButton(2)}</Link>
                    < Link to='/DayTrips' className="btn-container">{this._createButton(3)}</Link>
                    < Link to='/Sleep' className="btn-container">{this._createButton(4)}</Link>
                </div>
            </div >
        )
    }

    _createButton(btnIndex) {
        return (
            <div className="btn-underline-container" id={this.state.btnIds[btnIndex]}>
                <button type="button" className={this.state.btnClasses[btnIndex]}>{this.state.btnTexts[btnIndex]}</button>
                <div className="underline" />
            </div>
        );
    }

    _getActPage() {
        // const maxWidth = "65%";
        // const minWidth = "0";
        const actPageURL = this.props.location.pathname;
        for (let i = 0; i < this.state.btnIds.length; i++) {
            const btnElement = document.getElementById(this.state.btnIds[i]);
            if (btnElement !== null && btnElement !== undefined) {
                // const underlineElement = btnElement.lastElementChild;
                // actPageURL === this.state.pageNames[i] ? underlineElement.style.width = maxWidth : underlineElement.style.width = minWidth;
                actPageURL === this.state.pageNames[i] ? btnElement.classList.add("disabled") : btnElement.classList.remove("disabled");
            }
        }
    }
};

export default withRouter(NavBar);