import React from 'react';
import '../styles/Home.css';
import ImgMuenster from '../pictures/muenster.jpg'


function Home() {
    return (
        <div className="container-welcome">
            <div className="header-welcome">
                <img src={ImgMuenster} className="welcome-pic" alt="this is car" />
            </div>
            <h1 className="header-welcome-lbl"> Willkommen</h1>


            <div className="ourstory">
                <div className="ourstory-header">
                    Wie genau - das wollt ihr wissen?
                </div>
                <div className="ourstory-subheader">
                    Gut, ich denke, wir lassen die Bombe platzen und versorgen euch mit dem ein oder anderen Detail.
                </div>

                <div className="ourstory-text">
                    Angefangen hat’s doch tatsächlich in einem Onlinechat... jaja, auch wir sind so ein online Dating Paar ;) Thibault, eigentlich auf der Suche nach Anschluss in der Region Stuttgart und Maria mit einiger Verzweiflung auf der Suche nach der großen Liebe.
                </div>
                <div className="ourstory-text">
                    Der erste Kontakt bestand in Thibaults Frage: „Kennen wir uns?“ - Maria völlig verwirrt „Nein, warum?“ Was war passiert? Thibault hatte schon öfter seinen Kumpel in Münster besucht und dachte, wir seien uns dort bereits begegnet. So war es zwar nicht, aber es stellte sich heraus, dass wir tatsächlich gemeinsame Bekannte dort hatten. So dachte sich dann Maria: „Der kann nicht völlig daneben sein.“ und so stand dem ersten Date, trotz der großen Entfernung, nichts mehr im Weg.
                </div>
                <div className="ourstory-text">
                    Nachdem Thibault am 7.7.2017 nach staureicher Autofahrt freitags abends endlich angekommen war, trieb ihn großer Hunger. Nach der ersten Begrüßung wollte er dann Maria zum Essen einladen. Leider war es schon recht spät und Maria bereits vorher mit Kolleginnen Essen gewesen. So gab es für den Ausgehungerten einen Döner auf die Hand und wir schlugen den Weg zum Kanal ein. Dort setzten wir uns ans Wasser und redeten über Gott und die Welt. Die Zeit verrann wie im Flug und es wurde Zeit zum Aufbruch. Doch bevor Thibault in sein Auto stieg, zog er von irgendwo her eine gefaltete Serviettenrose hervor, überreichte sie Maria mit den Worten: „Du entscheidest, ob wir uns wieder sehen.“ Maria ziemlich verdattert: „Äh ja, danke.“
                </div>
                <div className="ourstory-text">
                    Naja, wie sich Maria entschieden hat, könnt ihr euch ja denken.
                </div>
                <div className="ourstory-text">
                    Neben zahlreichen WhatsApp und Telefonaten folgten zwei weitere Dates in Münster und dann kam der große Tag, an dem Maria die Reise nach Altingen antrat. Spät abends am 4.8.2017 beim Wein auf dem Sofa gab’s den ersten Kuss und am folgenden Tag schlenderten wir das erste Mal Hand in Hand als Paar über die Insel Mainau.
                </div>
                <div className="ourstory-text">
                In der Folgezeit lernte Thibault die Strecke nach Münster im Schlaf zu fahren, machten wir gemeinsam Urlaub, an der Nordsee, der sächsischen Schweiz und in Schweden, bis Maria endlich ihre Approbation in der Tasche hatte. Anfang April 2019 war es dann geschafft und unser gemeinsames Abenteuer begann in Altingen.
                </div>
            </div>

            <div>







                Nach unserer Verlobung am 31.1.2021 freuen wir uns nun gemeinsam mit euch auf die bevorstehende Hochzeit und viele, viele weitere glückliche Jahre.
            </div>
            <div>
                5 years later, we’ve spent a 6-month stint in Queenstown, bought our very first home, and welcomed 2 mischievous kittens to our family. After travelling through New Zealand, Kurt finally popped the question – and Jemima said yes!
            </div>

        </div>
    )
}

export default Home;