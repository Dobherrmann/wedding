import React, { Component } from 'react';
import '../styles/Timeline.css';

class Timeline extends Component {
    state = {
        day: [
            {
                event: [
                    { date: "25 Mai", eventTitle: "Anreise", eventText: "" },
                    { date: "25 Mai", eventTitle: "Grillen", eventText: "Wer schon da ist und Lust hat: Grillen bei Marias Eltern in Burgstädt" }
                ],
            },
            {
                event: [
                    { date: "26 Mai", eventTitle: "Trauung", eventText: "Trauung in der Stadtkirche Burgstädt" },
                    { date: "26 Mai", eventTitle: "Sektempfang", eventText: "Sektempfang und Feier im Schlosshotel Rabenstein" }
                ],
            },
            {
                event: [
                    { date: "27 Mai", eventTitle: "Frühstück", eventText: "gemeinsames Frühstück, für alle, die im Schlosshotel übernachtet haben" },
                    { date: "27 Mai", eventTitle: "Ausflüge", eventText: "wer möchte: kleiner Ausflug in die Umgebung" }
                ],
            },
        ],
    }

    //     Donnerstag
    // •	Anreise
    // •	Wer schon da ist und Lust hat: Grillen bei Marias Eltern in Burgstädt 

    // Freitag
    // •	Trauung in der Stadtkirche Burgstädt
    // •	Sektempfang und Feier im Schlosshotel Rabenstein

    // Samstag
    // •	gemeinsames Frühstück, für alle, die im Schlosshotel übernachtet haben
    // •	wer möchte: kleiner Ausflug in die Umgebung



    // https://codepen.io/htmlcodex/pen/LYGjPgV?editors=1100
    render() {
        console.log("samstag", this.state.day[2].event[1].eventTitle)
        return (
            <div>
                <div className="timeline-header">
                    <h1>Ablauf</h1>
                    <p>Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.                   </p>
                </div>
                <h1>Donnerstag</h1>
                <div className="timeline">
                    {this._createElementLeft(this.state.day[0].event[0])}
                    {this._createElementRight(this.state.day[0].event[1])}
                </div>
                <h1>Freitag</h1>
                <div className="timeline">
                    {this._createElementLeft(this.state.day[1].event[0])}
                    {this._createElementRight(this.state.day[1].event[1])}
                </div>
                <h1>Samstag</h1>
                <div className="timeline">
                    {this._createElementLeft(this.state.day[2].event[0])}
                    {this._createElementRight(this.state.day[2].event[1])}
                </div>

            </div>
        );
    };

    _createElementLeft(event) {
        return (
            <div className="container left">
                <div className="date"> {event.date} </div>
                <i className="icon fa fa-home"></i>
                <div className="content">
                    <h2>{event.eventTitle}</h2>
                    <p>
                        {event.eventText}
                    </p>
                </div>
            </div>
        )
    };

    _createElementRight(event) {
        return (
            <div className="container right">
                <div className="date">{event.date}</div>
                <i className="icon fa fa-home"></i>
                <div className="content">
                    <h2>{event.eventTitle}</h2>
                    <p>
                        {event.eventText}
                    </p>
                </div>
            </div>
        )
    };

}

export default Timeline;
