import React from 'react';
import { Link } from "react-router-dom";
import './ServicesStyle.css';

import Digital from '../../assets/services-img/digital.jpg'
import Faces from '../../assets/services-img/Faces.jpg'
import PerformingArts from '../../assets/services-img/Performingarts.jpg'
import Productions from '../../assets/services-img/Productions.jpg'


function Service(props) {
    const { img, to, caption } = props;
    return (
        <>
            <div className='service'>
                <img src={img} alt="" />
                <Link to={to} target='blank_'>
                    <div className='caption'>
                        {/* <img src={capImg} alt="" /> */}
                        <h3>Sensationz</h3>
                        <h3>{caption}</h3>
                    </div>
                </Link>
            </div>
        </>
    )
}


export default function Services() {

    return (
        <>
            <div className='services'>
                <Service
                    img={PerformingArts}
                    to={"https://www.sensationzperformingarts.com/"}
                    caption={"Performing Arts"}
                />
                <Service
                    img={Digital}
                    to={"https://sensationzdigital.com/"}
                    caption={"Digital"}
                />
                <Service
                    img={Faces}
                    to={"https://thebollywoodfaces.com/"}
                    caption={"Bolywood Faces"}
                />
                <Service
                    img={Productions}
                    to={"https://sensationzproductions.com/"}
                    caption={"Productions"}
                />

            </div >
        </>
    )
}
