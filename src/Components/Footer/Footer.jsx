import React from 'react';
import './FooterStyle.css';
import { Link } from "react-router-dom";

import { IoLogoYoutube } from "react-icons/io5";

export default function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='foot1'>
                    <div className='foot1-1'>
                        <Link to="https://www.youtube.com/@SensationzMediaArtsPvtLtd" target="_blank"><li><IoLogoYoutube className='social' /></li></Link>
                    </div>
                    <div className='foot1-2'>
                        <Link to="/PrivacyPolicy"><li className='privacy'>Privacy Policy</li></Link>
                    </div>
                </div>
                {/* <hr /> */}
                <div className="foot2">
                    <p>© 2024 Sensationz Media & Arts pvt. ltd. | All rights reserved </p>
                </div>
            </div>

        </>
    )
}
