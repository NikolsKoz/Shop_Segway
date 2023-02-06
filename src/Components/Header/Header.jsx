import React from "react";
import style from "./Header.module.scss";
import {Logo_header, Basket, Instagram} from "../../assets/img/svg";
import manager from "../../assets/img/Photo-manager.png";
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.contacts}>
                <Link to="/Shop_Segway">REVIEWS</Link>
                <Link to="/Shop_Segway">SHIPPING AND PAYMENT</Link>
                <Link to="/Shop_Segway">WHOLESALE</Link>
                <Link to="/Shop_Segway">BLOG</Link>
                <Link to="/Shop_Segway">CONTACTS</Link>
                <Link to="/Shop_Segway"><Basket /></Link>
                <Link to="/Shop_Segway"><Instagram /></Link>
                <Link to="/Shop_Segway">+1(888)888-88-88</Link>
            </div>
            <div className={style.logo}>
                <Link to="/Shop_Segway">
                    <Logo_header />
                </Link>
                <div className={style.manager}>
                    <img src={manager} alt="photo-manager"/>
                    <div className={style.ask}>
                        <span>JOHN SMITH</span><br/>
                        <Link to="/Shop_Segway">ask a question manager</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}