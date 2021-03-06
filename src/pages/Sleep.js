import React, { Component } from 'react';
import '../styles/Sleep.css';
import { FiExternalLink } from "react-icons/fi";


class Sleep extends Component {
    state = {
        lodgings: [
            {
                hotel: "Hotel Schloss Rabenstein",
                text: [
                    `Ihr könnt gern gemeinsam mit uns am Ort der Feier übernachten.`,
                    `Wir haben Zimmer für euch von Donnerstag bis Sonntag reserviert. Bitte gebt uns Bescheid, wenn ihr davon Gebrauch machen wollt.`,
                    "Einzelzimmer 80,00€",
                    "Doppelzimmer 110,00€",
                    "First-Class-Zimmer 149,00€",
                    "Familienzimmer (ein Doppelzimmer und ein Einzelzimmer mit gemeinsamen Bad) 149,00€",
                    "Aufpreis für Aufbettung Kind bis 14 Jahre: 19,00 € / Tag",

                ],
                // Zustellmöglichkeit für Babybett bis 3 Jahre: pro Kind 7,50 € / Tag
                // Frühstück 11,00€ (8.00-11.00 Uhr)
                // Anreise ab 14.00 Uhr, Abreise am Wochenende und Feiertagen bis 11.00 Uhr (sonst 10.00 Uhr)
                // Thomas-Müntzer-Höhe 14
                // 09117 Chemnitz, OT Rabenstein
                // `,
                link: "https://www.hotel-schloss-rabenstein.de/de/"
            },
            {
                hotel: "Campingplatz Rabenstein",
                text: ["Eine sehr einfache! aber dafür preisgünstige Alternative ist der nahegelegene Campingplatz am Stausee. Es kann gezeltet werden, es sind aber auch kleine Bungalows und Hütten zu haben. Bis zur Location nur 500m. Bitte bucht selbstständig."],
                link: "http://www.campingplatz-rabenstein.de/index.html"
            },
            {
                hotel: "Ferienwohnung ",
                text: ["Wer lieber seine eigenen 4 Wände möchte, kann sich diese Ferienwohnungen anschauen. Unter einem Dach gibt es 5 verschiedene Unterkünfte für jeweils 4 bis 8 Personen. Ca. 5 km, knapp 10 Autominuten zur Location. Bitte bucht selbstständig."],
                link: "https://www.ferien-in-chemnitz.de/index.php"
            },
            // {
            //     hotel: "4",
            //     text: "Wer lieber seine eigenen 4 Wände möchte, kann sich diese Ferienwohnungen anschauen. Unter einem Dach gibt es 5 verschiedene Unterkünfte für jeweils 4 bis 8 Personen. Ca. 5 km, knapp 10 Autominuten zur Location. Bitte bucht selbstständig über die angegebene Webadresse.",
            //     link: "https://www.hotel-schloss-rabenstein.de/hotel/"
            // },
        ]
    }

    render() {
        return (
            <div className="sleep-container">
                {this._createCard(this.state.lodgings[0])}
                {this._createCard(this.state.lodgings[1])}
                {this._createCard(this.state.lodgings[2])}
                {/* {this._createCard(this.state.lodgings[3])} */}
                {/* <div>Sollte nichts dabei sein, schaut selbstständig nach und bucht, was euch gefällt. Benötigt ihr Hilfe, sagt uns Bescheid.</div> */}
                {/* Sollte nichts dabei sein, bucht was euch gefällt. Benötigt ihr Hilfe, sagt uns Bescheid. */}
            </div>
        );
    };

    _createCard(mylodgings) {
        const link = <a className="mylink" href={mylodgings.link} rel="noreferrer" target="_blank">{mylodgings.hotel} <FiExternalLink /></a>;
        
        let texts = [];
        for(let i=0; i<mylodgings.text.length; i++){
            texts[i] = <p>{mylodgings.text[i]}</p>;
        }
        


        return (
            <div className="sleep-card">
                <h1 className="sleep-card-header">{mylodgings.hotel}</h1>
                <div className=""></div>
                <div className="sleediv-card-text">{texts}</div>
                <div className="sleep-card-link">{link}</div>
            </div>

        )
    }
}

export default Sleep;



// `
                // 
                // Thomas-Müntzer-Höhe 14
                // 09117 Chemnitz, OT Rabenstein
                // Wir haben Zimmer für euch von Donnerstag bis Samstag reserviert. Bitte gebt uns Bescheid, wenn ihr davon Gebrauch machen wollt.
                // Einzelzimmer 80,00€
                // Doppelzimmer 110,00€
                // First-Class-Zimmer 149,00€
                // Familienzimmer (ein Doppelzimmer und ein Einzelzimmer mit gemeinsamen Bad) 149,00€
                // Aufpreis für Aufbettung Kind bis 14 Jahre: 19,00 € / Tag
                // Zustellmöglichkeit für Babybett bis 3 Jahre: pro Kind 7,50 € / Tag
                // Frühstück 11,00€ (8.00-11.00 Uhr)
                // Anreise ab 14.00 Uhr, Abreise am Wochenende und Feiertagen bis 11.00 Uhr (sonst 10.00 Uhr)

                // `,