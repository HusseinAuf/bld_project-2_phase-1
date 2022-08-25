import React , {Component} from "react";
import "./CSS/Header.css"
function Header(props) {
    const {category , header , description} = props.data;
    // console.log({header});
    return (
    <div className="header">
         <h1>{header}</h1>
         <p className="description">{description}</p>
         <button>Explore {category}</button>
    </div>
    );
}
export default Header;
