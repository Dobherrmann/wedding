import React, { Component } from 'react';
import '../styles/Sleep.css';
import { FiExternalLink } from "react-icons/fi";


class Sleep extends Component {
    state = {
        lodgings: [
            {
                hotel: "Schloss Rabenstein",
                text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                link: "https://www.hotel-schloss-rabenstein.de/hotel/"
            },
        ]
    }

    render() {
        return (
            <div className="sleep-container">
                {this._createCard()}
                {this._createCard()}
            </div>
        );
    };


    _createCard() {
        const link = <a href={this.state.lodgings[0].link} rel="noreferrer" target="_blank">Link {this.state.lodgings[0].hotel} <FiExternalLink /></a>;
        return (
            <div className="sleep-card">
                <h1 className="sleep-card-header">{this.state.lodgings[0].hotel}</h1>
                <p className="sleep-card-text">{this.state.lodgings[0].text}</p>
                <div className="sleep-card-link">{link}</div>
            </div>



        )
    }


}

export default Sleep;