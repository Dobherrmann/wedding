import React, { Component } from 'react';
import '../styles/DayTripsV2.css';

import DresdenPic from '../pictures/IMG_1659.jpg';
import ChemnitzPic from '../pictures/KarlMarx.jpeg';
import ErzgebirgePic from '../pictures/Erzgebirge.jpg';
import LeipzigPic from '../pictures/ZooLeipzig.JPG';

class Daytrips extends Component {
    state = {
        pics: [DresdenPic, ChemnitzPic, ErzgebirgePic, LeipzigPic],
        picTitle: ["Dresden", "Chemnitz", "Erzgebirge", "Leipzig"],
        texts: [
            `Erkundet Elbflorenz am besten bei einem Bummel durch die Altstadt vorbei an der Frauenkirche, Zwinger, Semperoper,... Besonders empfehlenswert ist ein Besuch im historischen Grünen Gewölbe, das sich im Stadtschloss befindet oder auch in der Gemäldegalerie Alte Meister im Zwinger. In der näheren Umgebung gibt es z.B. Schloss Pillnitz oder auch das Weingut Schloss Wackerbarth zu bestaunen. Auf der Weiterreise macht unbedingt einen Stopp in der sächsische Schweiz. Mit ihren Sandsteinfelsen sollte dieses Naturerbe auf jeden Fall bei einer Wanderung erkundet werden.`,
            `Einen Besuch ist sicher auch Chemnitz wert - immerhin europäische Kulturhauptstadt 2025! Erkundet es am besten bei einem Bummel durch die Innenstadt und lasst das besondere Flair auf euch wirken. Für alle die Museumsbegeistert sind und mehr wissen wollen sind ein Besuch im Museum Gunzenhauser mit einer der größten Otto Dix Sammlungen, dem smac (Sächsisches Landesmuseum für Archäologie) oder dem Industriemuseum, wo ihr in ein Stück sächsische Industriegeschichte eintauchen könnt, zu empfehlen.`,
            `Das nahe Erzgebirge, das erst kürzlich den Welterbe Titel verliehen bekommen hat, bietet zahlreiche Ausflugsmöglichkeiten. Angefangen von Wanderungen auf Sachsens höchste Erhebung, dem Fichtelberg, bis hin zu einem Besuch unter Tage im Besucherbergwerk. Solls ein bisschen weihnachtlich werden, besucht die „Manufaktur der Träume“ in Annaberg, oder Seiffen mit seinen Schauwerkstätten und bestaunt Räuchermännchen, Schwibbögen, Nussknacker und Co.`,
            `Last but not least Leipzig. Als Bachstadt und Ort der friedlichen Montagsdemonstrationen 1989 hat es geschichtlich einiges zu bieten, was ihr bei einem Bummel durch die Innenstadt erkunden könnt. Viele Cafés, Restaurants und Geschäfte laden zum Flanieren und Shoppen ein. Gerade mit Kindern sollte ein Besuch im Zoo Pflichtprogramm sein. Für Wasser(sport)begeisterte hält das Geflecht an Kanälen oder das Naherholungsgebiete Cospudener See viele Betätigungsmöglichkeiten bereit.`,
        ],
        viewDetails: Array(4).fill(false),
    };


    constructor(props) {
        super(props);
        this._myCollapsFunctionHandler = this._myCollapsFunction.bind(this);
    };

    render() {
        return (
            <div>
                <div className="daytrips-headertext">
                    Ausflüge
                </div>
                <div className="daytrips-subheadertext">
                    Wenn ihr die Gelegenheit nutzen möchtet und euren Aufenthalt zu einem (Kurz-)Urlaub ausweiten wollt, haben wir folgende Empfehlungen.
                </div>
                {this._creatCardContainer()}
            </div>
        );
    };


    _myCollapsFunction(value) {
        let anewState = this.state.viewDetails;
        anewState[value] = !this.state.viewDetails[value];
        this.setState({ viewDetails: anewState });
        // console.log("myFunc", this.state.viewDetails[value], value);
    };


    _createCard(cardNumber, cardKey) {
        // picture, picTitle, pictext
        // this.state.pics[i], this.state.picTitle[i], this.state.texts[i]
        // console.log("cardNumber",cardNumber)
        return (
            <div className="card" key={cardKey}>
                {/* oberer Container mit Bild*/}
                <div className="card-pic-container">
                    <img src={this.state.pics[cardNumber]} className="card-daytrips-pic" alt="picture will be loaded" />
                    <h1 className="card-daytrips-header">{this.state.picTitle[cardNumber]}</h1>
                    <div className="card-daytrips-border"></div>
                </div>
                {/* unterer Container mit Text */}
                <div className="card-daytrips-text-container">
                    <div className="card-daytrips-text-container-header" onClick={() => this._myCollapsFunction(cardNumber)}>
                        {/* Change to Button */}
                        <div>
                            Ausflugs Tipp
                        </div>
                        <div>
                            {this.state.viewDetails[cardNumber] ? '-' : '+'}
                        </div>

                    </div>
                    {this.state.viewDetails[cardNumber] && (<div> {this.state.texts[cardNumber]} </div>)}
                </div>
            </div>
        );
    };

    _creatCardContainer() {
        let cards = [];
        for (let i = 0; i < this.state.texts.length; i++) {
            const myKey = `cardkey-${this.state.pics[i]}`
            cards[i] = this._createCard(i, myKey);
        }

        return (
            <div className="card-container">
                {cards}
            </div>
        );
    }
}

export default Daytrips;