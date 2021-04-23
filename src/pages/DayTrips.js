import React, { Component } from 'react';
import '../styles/DayTrips.css';

import Dresden from '../pictures/muenster.jpg';

class DayTrips extends Component {
    state = {
    }

    render() {
        return (
            <div>
                <div>
                    Wenn ihr die Gelegenheit nutzen möchtet und euren Aufenthalt zu einem (Kurz-)Urlaub ausweiten wollt, haben wir folgende Empfehlungen
                </div>
                <div className="card-container">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <div className="flip-card-front-pic-container">
                                    <h1 className="flip-card-front-daytrips-front-text">Dresden</h1>
                                    <img src={Dresden} className="flip-card-front-daytrips-pics" alt="this is car" />
                                </div>
                            </div>
                            <div className="flip-card-back">
                                Erkundet die Elbflorenz am besten bei einem Bummel durch die Altstadt vorbei an der Frauenkirche, Zwinger, Semperoper,... Besonders empfehlenswert ist ein Besuch im historischen Grünen Gewölbe, das sich im Stadtschloss befindet. In der näheren Umgebung gibt es z.B. Schloss Pillnitz oder auch das Weingut Schloss Wackerbarth zu bestaunen. Auf der Weiterreise macht unbedingt einen Stopp in der sächsische Schweiz. Mit ihren Sandsteinfelsen sollte dieses Naturerbe auf jeden Fall bei einer Wanderung erkundet werden.
                            </div>
                        </div>
                    </div>

                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <div className="flip-card-front-pic-container">
                                    <h1 className="flip-card-front-daytrips-front-text">Dresden</h1>
                                    <img src={Dresden} className="flip-card-front-daytrips-pics" alt="this is car" />
                                </div>
                            </div>
                            <div className="flip-card-back">
                                Einen Besuch ist sicher auch Chemnitz wert - immerhin europäische Kulturhauptstadt 2025-, mit einem Bummel durch die Innenstadt, einem Besuch in den Kunstsammlungen, dem Industriemuseum,… könnt ihr eintauchen in ein Stück sächsische Industriegeschichte und DDR-Architektur ;)
                            </div>
                        </div>
                    </div>

                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <div className="flip-card-front-pic-container">
                                    <h1 className="flip-card-front-daytrips-front-text">Dresden</h1>
                                    <img src={Dresden} className="flip-card-front-daytrips-pics" alt="this is car" />
                                </div>
                            </div>
                            <div className="flip-card-back">
                                Auch das nahe Erzgebirge bietet zahlreiche Ausflugsmöglichkeiten. Von Wanderungen auf Sachsens höchste Erhebung, dem Fichtelberg bis zu einem Besuch unter Tage im Besucherbergwerk. Solls ein bisschen weihnachtlich werden, besucht die „Manufaktur der Träume“ in Annaberg oder Seiffen mit seinen Schauwerkstätten und bestaunt Räuchermännchen, Schwibbögen, Nussknacker und Co.
                            </div>
                        </div>
                    </div>

                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <div className="flip-card-front-pic-container">
                                    <h1 className="flip-card-front-daytrips-front-text">Dresden</h1>
                                    <img src={Dresden} className="flip-card-front-daytrips-pics" alt="this is car" />
                                </div>
                            </div>
                            <div className="flip-card-back">
                                Last but not least ist auch Leipzig eine Reise wert. Als Bachstadt und Ort der friedlichen Montagsdemonstrationen hat sie geschichtlich einiges zu bieten, was ihr bei einem Bummel durch die Innenstadt erkunden könnt. Viele Cafés, Restaurants und Läden laden zum Bummeln und Shoppen ein. Weiterhin sollte ein Besuch im Zoo vor allem mit Kindern Pflichtprogramm sein. Für Wasser(sport)begeisterte auch das Geflecht an Kanälen oder das Naherholungsgebiete Cospudener See.
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        );
    }

}

export default DayTrips;