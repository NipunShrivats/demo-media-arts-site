import React from 'react';
import "./AboutStyle.css";
import aboutImg from "../../assets/imgAssets/about.jpg"
import playIcon from "../../assets/imgAssets/play-icon-red.png"


export default function About({ setPlayState }) {
    return (
        <>
            <div className='about'>
                <div className='about-left'>
                    <img src={aboutImg} className='about-img' alt="" />
                    <img src={playIcon} className='play-icon' alt="" onClick={() => { setPlayState(true) }} />
                </div>
                <div className='about-right'>
                    <h2>"Sensationz Media & Arts Pvt. Ltd"</h2>
                    <p>Successfully founded in 2007, is ‘Sensationz Media & Arts Pvt. Ltd., with Founding Members – , Mrs. Anil Prabha Anand (Chairman & Managing Director), Mr. Harsh Anand (Director, Publisher & Editor) & Mrs. Sucheta Anand (Managing Editor) onboard the panel, who efficiently commenced its business operation and pioneered the banner.</p><br />
                    <p>Today ‘Sensationz Media & Arts Pvt. Ltd. has full-fledgedly branched out with</p>
                    <ul>
                        <li>Performing Arts</li>
                        <li>Digital &</li>
                        <li>The Bollywood Faces</li>
                        <li>Productions</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
