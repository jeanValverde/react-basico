import React from "react";
import '../../assets/css/navbar.css';

class Navbar extends React.Component {

    render() {
        return (
                <header className="header" >
                    <div className="topnav">
                        <a className="active" href="#home">Home</a>
                        <a href="#news">News</a>
                        <a href="#contact">Contact</a>
                        <a href="#about">About</a>
                    </div>
                </header>
                );
    }

};

export default Navbar;

