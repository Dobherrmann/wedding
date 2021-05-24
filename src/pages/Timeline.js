import React, { Component } from 'react';
import '../styles/Timeline.css';

class Timeline extends Component {
    state = {
        day: [
            {
                event: [
                    { date: "14.00 Uhr", eventTitle: "Anreise", eventText: "" },
                    { date: "18.00 Uhr", eventTitle: "Abendessen", eventText: "Bei gutem Wetter und nur wer möchte: Abendessen bei Marias Eltern in Burgstädt " }
                ],
            },
            {
                event: [
                    { date: "14.00 Uhr", eventTitle: "Trauung", eventText: "Trauung in der Stadtkirche Burgstädt" },
                    { date: "15.30 Uhr", eventTitle: "Sektempfang", eventText: "Sektempfang und Feier im Schlosshotel Rabenstein" },
                    { date: "22.00 Uhr", eventTitle: "Party", eventText: "Party Party Party" },
                    { date: "2.00 Uhr", eventTitle: "Ausklang", eventText: "Gute Nacht - Ab ins Bett!!!"}
                ],
            },
            {
                event: [
                    { date: "9.30 Uhr", eventTitle: "Frühstück", eventText: "gemeinsames Frühstück für alle, die im Schlosshotel übernachtet haben" },
                    { date: "11.00 Uhr", eventTitle: "Ausflüge", eventText: "wer möchte: kleiner Ausflug in die Umgebung" }
                ],
            },
        ],
    }

    // https://codepen.io/htmlcodex/pen/LYGjPgV?editors=1100
    render() {
        console.log("samstag", this.state.day[2].event[1].eventTitle)
        return (
            <div>
                <div className="timeline-header">
                    <h1>Ablauf</h1>
                    <p>Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.                   </p>
                </div>
                <h1>Donnerstag - 26 Mai</h1>
                <div className="timeline">
                    {this._createElementLeft(this.state.day[0].event[0])}
                    {this._createElementRight(this.state.day[0].event[1])}
                </div>
                <h1>Freitag - 27 Mai</h1>
                <div className="timeline">
                    {this._createElementLeft(this.state.day[1].event[0])}
                    {this._createElementRight(this.state.day[1].event[1])}
                    {this._createElementLeft(this.state.day[1].event[2])}
                    {this._createElementRight(this.state.day[1].event[3])}
                </div>
                <h1>Samstag - 28 Mai</h1>
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
