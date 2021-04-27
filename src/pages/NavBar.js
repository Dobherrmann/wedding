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
        const htmlElement = 
            <div className="nav-container">
            <div className="nav-ournames">
                Maria & Thibault
            </div>
            <div className="btn-group">
                < Link to='/' className="btn-container">{this._createButton(0, "disabled")}</Link>
                < Link to='/Pictures' className="btn-container">{this._createButton(1)}</Link>
                < Link to='/Timeline' className="btn-container">{this._createButton(2)}</Link>
                < Link to='/DayTripsV2' className="btn-container">{this._createButton(3)}</Link>
                < Link to='/Sleep' className="btn-container">{this._createButton(4)}</Link>
            </div>
        </div >
        
        this._getActPage();
        return (
            htmlElement
            
        )
    }

    _createButton(btnIndex, addClass) {
        return (
            <div className={"btn-underline-container "+addClass} id={this.state.btnIds[btnIndex]}>
                <button type="button" className={[this.state.btnClasses[btnIndex]]}>{this.state.btnTexts[btnIndex]}</button>
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