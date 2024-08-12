import React from 'react'
import './DirectorsStyle.css'
import Card from "../Card/Card"
import Harsh from "../../assets/imgAssets/harsh-anand.jpeg"
import Sucheta from "../../assets/imgAssets/sucheta-anand.jpeg"

export default function Directors() {
    return (
        <>
            <div className='directors'>

                <Card
                    img={Harsh}
                    name={"Mr. Harsh Anand"}
                    about={" A Film Director, started way back in 2003 , worked with top production houses balaji telefilms, venus records and tapes, jai mehta productions directed one of the top serial of indian television “kyunki saas bhi kabhi bahu thi” directed film Starring Ravi kishen won best debut director award in dubai , even on OTT you can see his work on mxplayer hungama and many more he is known for his creative genius .he also holds an important position as “Managing Editor of “The Bollywood Faces” magazine, besides being the backbone of the company, he is also a successful film producer- producing feature film – Love aur Rajneeti starring Ravi Kishen, short films starring Hiten tejwani, Arun Bakshi, Manoj bakshi and the list continues."} />
                <Card
                    img={Sucheta}
                    name={"Mrs. Sucheta Anand"}
                    about={"Sucheta Anand – Director of operations ( sensationz media), her dynamic personality and aggressive approach has given sensationz its super wings and took this company from 10 employees to 120 employees company & from 1000 students to 100000 students worldwide.She also holds an important position as “Managing Editor of “The Bollywood Faces” magazine, besides being the backbone of the company, she is also a successful film producer- producing feature film – Love aur Rajneeti starring Ravi Kishen, short films starring Hiten tejwani, Arun Bakshi, Manoj bakshi and the list continues."} />
            </div>
        </>
    )
}
