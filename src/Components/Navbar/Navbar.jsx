import React, { useEffect, useState } from 'react'
import "./NavbarStyle.css"
import logow from "../../assets/imgAssets/logo-white.png"
import logob from "../../assets/imgAssets/logo-black.png"
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { RxHamburgerMenu } from "react-icons/rx";
import MenuIcon from "../../assets/imgAssets/menu-icon.png"

export default function Navbar() {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 100 ? setSticky(true) : setSticky(false);
        })
    }, [])

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
    }

    return (
        <>
            <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
                <div className='logo-cover1'>
                    <div className='logo-inside1'>
                        <img src={logow} className='logo' alt="" />
                    </div>
                    <div className='logo-inside2'>
                        <h5>SENSATIONZ</h5>
                        <h3>Media & Arts</h3>
                    </div>

                </div>
                {/* <span><RxHamburgerMenu className='menu-icon' onClick={toggleMenu} /></span> */}
                <img src={MenuIcon} alt="" className='menu-icon' onClick={toggleMenu} />
                <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
                    <li><Link to='hero'
                        smooth={true}
                        offset={0}
                        durastion={500}>Home</Link></li>
                    <li><Link to='services'
                        smooth={true}
                        offset={-290}
                        durastion={500}>Services</Link></li>
                    <li> <Link to='about'
                        smooth={true}
                        offset={-240}
                        durastion={500}>About Us</Link></li>
                    <li><Link to='directors'
                        smooth={true}
                        offset={-210}
                        durastion={500}>Directors</Link></li>
                    <li className='btn-li'><Link to='contact'
                        smooth={true}
                        offset={-250}
                        durastion={500} className='btn'>Contact Us</Link> </li>
                </ul>
            </nav>
        </>
    )
}
