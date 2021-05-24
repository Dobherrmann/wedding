import React, { Component } from 'react';
import '../styles/Wedding.css';
import ImgMuenster from '../pictures/muenster.jpg'

import Pic1 from '../pictures/IMG_0075.jpg';
import Pic2 from '../pictures/IMG_0708.jpg';
import Pic3 from '../pictures/IMG_0604.jpg';
import Pic4 from '../pictures/IMG_1435.jpg';
import Pic5 from '../pictures/IMG_0634.jpg';
import Pic6 from '../pictures/IMG_0671.jpg';
import Pic7 from '../pictures/IMG_1489.jpg';


class Home extends Component {
    state = {
        textOurStory: [
            `Angefangen hat’s doch tatsächlich in einem Chat... jaja, auch wir sind so ein online Dating Paar ;) Thibault, eigentlich auf der Suche nach Anschluss in der Region Stuttgart und Maria auf der Suche nach der großen Liebe.`,
            `Der erste Kontakt bestand aus Thibaults Frage: „Kennen wir uns?“ - Maria völlig verwirrt „Nein!?“ Was war passiert? Thibault hatte schon öfter seinen Kumpel in Münster besucht und dachte, wir seien uns dort bereits begegnet. So war es zwar nicht, aber es stellte sich heraus, dass wir tatsächlich gemeinsame Bekannte dort hatten. So dachte sich Maria: „Der kann nicht völlig daneben sein“ und so stand dem ersten Date nichts mehr im Weg.`,
            `Nachdem Thibault am 7.7.2017 nach staureicher Autofahrt endlich angekommen war, trieb ihn großer Hunger. Nach der ersten Begrüßung wollte er Maria zum Essen einladen. Leider war Maria bereits mit Kolleginnen Essen gewesen, sodass es für den Ausgehungerten einen Döner auf die Hand gab und wir den Weg zum Kanal einschlugen. Dort setzten wir uns ans Wasser und redeten über Gott und die Welt. Die Zeit verrann, der Abschied nahte. Doch bevor Thibault in sein Auto stieg, zog er von irgendwo her eine gefaltete Serviettenrose hervor und überreichte sie Maria mit den Worten: „Du entscheidest, ob wir uns wieder sehen.“ Maria ziemlich verdattert: „Äh ja, danke.“ Wie sich Maria entschieden hat, könnt ihr euch denken.`, `Naja, wie sich Maria entschieden hat, könnt ihr euch ja denken.`,
            `Neben zahlreichen WhatsApp und Telefonaten folgten weitere Dates in Münster und dann kam der große Tag, an dem Maria die Reise nach Altingen antrat. Spät abends am 4.8.2017 beim Wein auf dem Sofa gab’s den ersten Kuss und am folgenden Tag schlenderten wir das erste Mal Hand in Hand über die Insel Mainau.`,
            `In der Folgezeit lernte Thibault die Strecke nach Münster im Schlaf zu fahren, verlebten wir gemeinsame Urlaube an der Nordsee, in der sächsischen Schweiz und in Schweden, bis Maria endlich ihre Approbation in der Tasche hatte. Anfang April 2019 war es geschafft und unser gemeinsames Abenteuer begann in Altingen.`,
            `Nach unserer Verlobung am 31.1.2021 freuen wir uns gemeinsam mit euch auf die bevorstehende Hochzeit und viele, viele weitere glückliche Jahre.`

        ],
        pics: [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7]
    }
    render() {

        let textblock = [];

        for (let i = 0; i < this.state.textOurStory.length; i++) {
            // console.log(i,"i%2", i%2)
            const myKey = `cardkey-landingpage-${this.state.pics[i].toString()}`
            // console.log("myKey",myKey)
            textblock[i] = i % 2 === 0 ? this._textblockPicLeft(i, myKey) : this._textblockPicRight(i, myKey);
        }

        return (
            <div className="container-welcome">
                <div className="header-welcome">
                    <img src={ImgMuenster} className="welcome-pic" alt="picture will be loaded" />
                </div>
                <h1 className="header-welcome-lbl"> Willkommen</h1>


                <div className="ourstory">
                    <div className="ourstory-header">
                        Wie genau - das wollt ihr wissen?
                    </div>
                    <div className="ourstory-subheader">
                        Ich denke, wir lassen die Bombe platzen und versorgen euch mit dem ein oder anderen Detail.
                    </div>
                    {textblock}
                </div>
            </div>
        )
    };

    _textblockPicLeft(sectionNumber, cardKey) {
        // console.log("left")
        return (
            <div className="container-ourstory-text" key={cardKey}>
                <img src={this.state.pics[sectionNumber]} className="ourstory-pic" alt="picture will be loaded" />
                <p className="ourstory-text-right">{this.state.textOurStory[sectionNumber]}</p>
            </div >
        )

    };

    _textblockPicRight(sectionNumber, cardKey) {
        // console.log("right")
        return (
            <div className="container-ourstory-text" key={cardKey}>
                <p className="ourstory-text-left">{this.state.textOurStory[sectionNumber]}</p>
                <img src={this.state.pics[sectionNumber]} className="ourstory-pic" alt="picture will be loaded" />
            </div >
        )
    };
}

export default Home;
