import { React } from "react";
import "./LogoNavStyle.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/imgAssets/logo-main.png";

export default function Nav() {
  return (
    <>
      <div className={`nav container`}>
        <div className="NavLogoCover">
          <Link to="/">
            <img src={Logo} className="img" alt="" />
          </Link>
        </div>
      </div>
    </>
  );
}
