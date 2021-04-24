import React, { Component } from 'react';
import '../styles/DayTrips.css';

import DresdenPic from '../pictures/IMG_1659.JPG';
import ChemnitzPic from '../pictures/20170713_122837.jpg';
import ErzgebirgePic from '../pictures/Bastei.jpg';
import LeipzigPic from '../pictures/BelantisLeipzig.JPG';

class DayTrips extends Component {
    state = {
        pics: [DresdenPic, ChemnitzPic, ErzgebirgePic, LeipzigPic],
        picTitle: ["Dresden", "Chemnitz", "Erzgebirge", "Leipzig"],
        texts: [
            `Erkundet die Elbflorenz am besten bei einem Bummel durch die Altstadt vorbei an der Frauenkirche, Zwinger, Semperoper,... Besonders empfehlenswert ist ein Besuch im historischen Grünen Gewölbe, das sich im Stadtschloss befindet. In der näheren Umgebung gibt es z.B. Schloss Pillnitz oder auch das Weingut Schloss Wackerbarth zu bestaunen. Auf der Weiterreise macht unbedingt einen Stopp in der sächsische Schweiz. Mit ihren Sandsteinfelsen sollte dieses Naturerbe auf jeden Fall bei einer Wanderung erkundet werden.`,
            `Einen Besuch ist sicher auch Chemnitz wert - immerhin europäische Kulturhauptstadt 2025-, mit einem Bummel durch die Innenstadt, einem Besuch in den Kunstsammlungen, dem Industriemuseum,… könnt ihr eintauchen in ein Stück sächsische Industriegeschichte und DDR-Architektur ;)`,
            `Auch das nahe Erzgebirge bietet zahlreiche AusBflugsmöglichkeiten. Von Wanderungen auf Sachsens höchste Erhebung, dem Fichtelberg bis zu einem Besuch unter Tage im Besucherbergwerk. Solls ein bisschen weihnachtlich werden, besucht die „Manufaktur der Träume“ in Annaberg oder Seiffen mit seinen Schauwerkstätten und bestaunt Räuchermännchen, Schwibbögen, Nussknacker und Co.`,
            `Last but not least ist auch Leipzig eine Reise wert. Als Bachstadt und Ort der friedlichen Montagsdemonstrationen hat sie geschichtlich einiges zu bieten, was ihr bei einem Bummel durch die Innenstadt erkunden könnt. Viele Cafés, Restaurants und Läden laden zum Bummeln und Shoppen ein. Weiterhin sollte ein Besuch im Zoo vor allem mit Kindern Pflichtprogramm sein. Für Wasser(sport)begeisterte auch das Geflecht an Kanälen oder das Naherholungsgebiete Cospudener See.`,
        ],
    }

    render() {
        return (
            <div>
                <div className="daytrips-headertext">
                    Ausflüge
                </div>
                <div>
                Wenn ihr die Gelegenheit nutzen möchtet und euren Aufenthalt zu einem (Kurz-)Urlaub ausweiten wollt, haben wir folgende Empfehlungen
                </div>
                {this._creatCardContainer()}
            </div>
        );
    };
    _createCard(picture, picTitle, pictext, cardKey) {
        return (
            <div className="flip-card" key={cardKey}>
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <div className="flip-card-front-pic-container">
                            <h1 className="flip-card-front-daytrips-front-text">{picTitle}</h1>
                            <img src={picture} className="flip-card-front-daytrips-pics" alt="this is car" />
                        </div>
                    </div>
                    <div className="flip-card-back">
                        {pictext}
                    </div>
                </div>
            </div>
        );
    };

    _creatCardContainer() {
        let cards = [];
        for (let i = 0; i < this.state.texts.length; i++) {
            const myKey = `cardkey-${this.state.pics[i]}`
            cards[i] = this._createCard(this.state.pics[i], this.state.picTitle[i], this.state.texts[i], myKey);
        }

        return (
            <div className="card-container">
                {cards}
            </div>
        );
    }
}

export default DayTrips;