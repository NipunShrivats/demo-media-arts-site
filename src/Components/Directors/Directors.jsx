import React from "react";
import "./DirectorsStyle.css";
import Card from "../Card/Card";
import Harsh from "../../assets/imgAssets/harsh-anand-left.jpg";
import Sucheta from "../../assets/imgAssets/sucheta-anand.jpeg";

export default function Directors() {
  return (
    <>
      <div className="directors stiff-block">
        <Card
          img={Harsh}
          name={"Mr. Harsh Anand"}
          about1={`A Film Director, started way back in 2003, worked with top production houses like Balaji Telefilms, Venus Records and Tapes, Jai Mehta Productions.`}
          about2={`Directed one of the top serial of Indian television “Kyunki Saas Bhi Kabhi Bahu Thi”, directed film Starring Ravi Kishan won best debut director award in Dubai, even on OTT you can see his work on "MX Player", "Hungama" and many more. He is known for his creative genius. He also holds an important position as The Managing Editor of "The Bollywood Faces" Magazine,`}
          about3={`Besides being the backbone of the company, he is also a successful film producer- producing feature film "Love aur Rajneeti" starring Ravi Kishan, short films starring Hiten Tejwani, Arun Bakshi, Manoj Bakshi and the list continues.`}
        />
        <Card
          img={Sucheta}
          name={"Mrs. Sucheta Anand"}
          about1={`Mrs. Sucheta Anand, Director of operations (sensationz media), her dynamic personality and aggressive approach has given sensationz its super wings and took this company from 10 employees to 120 employees company & from 1 thousand students to 1 lakh students worldwide.`}
          about2={`She also holds an important position as The Managing Editor of "The Bollywood Faces" magazine, besides being the backbone of the company, she is also a successful film producer, producing feature film like "Love aur Rajneeti" starring Ravi Kishan, short films starring Hiten Tejwani, Arun Bakshi, Manoj Bakshi and the list continues.`}
        />
      </div>
    </>
  );
}
