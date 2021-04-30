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
            {
                hotel: "2",
                text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                link: "https://www.hotel-schloss-rabenstein.de/hotel/"
            },
            {
                hotel: "3",
                text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                link: "https://www.hotel-schloss-rabenstein.de/hotel/"
            },
            {
                hotel: "4",
                text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                link: "https://www.hotel-schloss-rabenstein.de/hotel/"
            },
        ]
    }

    render() {
        return (
            <div className="sleep-container">
                {this._createCard(this.state.lodgings[0])}
                {this._createCard(this.state.lodgings[1])}
                {this._createCard(this.state.lodgings[2])}
                {this._createCard(this.state.lodgings[3])}
            </div>
        );
    };


    _createCard(mylodings) {
        const link = <a href={mylodings.link} rel="noreferrer" target="_blank">Link {mylodings.hotel} <FiExternalLink /></a>;
        return (
            <div className="sleep-card">
                <h1 className="sleep-card-header">{mylodings.hotel}</h1>
                <div className=""></div>
                <p className="sleep-card-text">{mylodings.text}</p>
                <div className="sleep-card-link">{link}</div>
            </div>
        )
    }


}

export default Sleep;