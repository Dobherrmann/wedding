import React, { Component } from 'react';
import '../styles/Timeline.css';

class Timeline extends Component {
    state = {

    }
    // https://codepen.io/htmlcodex/pen/LYGjPgV?editors=1100
    render() {
        return (
            <div>
                <div className="timeline-header">
                    <h1>Ablauf</h1>
                    <p>Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.                   </p>
                </div>
                <div className="timeline">
                    <div className="container left">
                        <div className="date"> 26 Mai </div>
                        <i className="icon fa fa-home"></i>
                        <div className="content">
                            <h2>Lorem ipsum dolor sit amet</h2>
                            <p>
                                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                            </p>
                        </div>
                    </div>
                    <div className="container right">
                        <div className="date"> 26 Mai </div>
                        <i className="icon fa fa-home"></i>
                        <div className="content">
                            <h2>Lorem ipsum dolor sit amet</h2>
                            <p>
                                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                        </p>
                        </div>
                    </div>

                </div>

            </div>

        );
    }
}

export default Timeline;
