import React from 'react';
import '../styles/Pictures.css';
// import { Link } from 'react-router-dom';
import Pic1 from '../pictures/pic_1.jpg';
import Pic2 from '../pictures/pic_3.jpg';
import Pic3 from '../pictures/pic_4.jpg';
import Pic4 from '../pictures/pic_5.jpg';
import Pic5 from '../pictures/pic_6.jpg';
import Pic6 from '../pictures/pic_7.jpg';
import Pic7 from '../pictures/pic_8.jpg';
import Pic8 from '../pictures/pic_9.jpg';
import Pic9 from '../pictures/pic_10.jpg';
import Pic10 from '../pictures/pic_11.jpg';
import Pic11 from '../pictures/pic_12.jpg';


function Pictures() {
    return (
        <div className="picture-container">
            <div className="image-gallery">
                <img src={Pic1} className="gallery-pic pic1" alt="picture will be loaded" />
                <img src={Pic2} className="gallery-pic pic2" alt="picture will be loaded" />
                <img src={Pic3} className="gallery-pic pic3" alt="picture will be loaded" />
                <img src={Pic4} className="gallery-pic pic4" alt="picture will be loaded" />
                <img src={Pic5} className="gallery-pic pic5" alt="picture will be loaded" />
                <img src={Pic6} className="gallery-pic pic6" alt="picture will be loaded" />
                <img src={Pic7} className="gallery-pic pic7" alt="picture will be loaded" />
                <img src={Pic8} className="gallery-pic pic8" alt="picture will be loaded" />
                <img src={Pic9} className="gallery-pic pic9" alt="picture will be loaded" />
                <img src={Pic10} className="gallery-pic pic10" alt="picture will be loaded" />
                <img src={Pic11} className="gallery-pic pic11" alt="picture will be loaded" />
            </div>
        </div>
    )
};

export default Pictures;
