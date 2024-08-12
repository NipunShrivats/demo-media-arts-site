import { React, useState, useEffect } from 'react'
import logo from "../../assets/imgAssets/Logo.png"
import "./LogoNavStyle.css"
import { Link } from "react-router-dom"

export default function Nav() {


    return (
        <>
            <div className={`nav container`}>
                <div className='NavLogoCover'>
                    <Link to="/"><img src={logo} className="img" alt="" /></Link>
                </div>
            </div >
        </>
    )
}
