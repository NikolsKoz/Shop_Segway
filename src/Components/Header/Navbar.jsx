import React, {Component} from "react";
import {Basket, Instagram} from "../../assets/img/svg";
import {Link, animateScroll as scroll} from "react-scroll";
import article from "../../data/articles.json";
import "./Header.module.scss";

export default class Navbar extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render() {
        return (
            <nav className="nav" id="navbar">
                <div className="nav-content">
                    <ul className="nav-items">
                        <li className="nav-item" style={{width: "1376px",display:"flex", justifyContent: "center"}}>
                            {article.links.map(item =><Link
                                activeClass="active"
                                to={item.to}
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                {item.name}
                            </Link>)}
                            <Link to="home"><Basket /></Link>
                            <a href="https://www.instagram.com/segway/" target="_blank"><Instagram /></a>
                            <a href="tel:+1(888)888-88-88">+1(888)888-88-88</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}