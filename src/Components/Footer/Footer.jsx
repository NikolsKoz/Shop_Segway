import React from "react";
import style from "./Footer.module.scss";
import {Logo_footer} from "../../assets/img/svg";


export const Footer = (props) => {
    return(
        <div className={style.footer}>
            <nav id={props.links[5].to} className={style.footLinks}>
                <a href={"#home"}><Logo_footer/></a>
            </nav>

            {props.contacts.map(item =><div className={style.contact}>
                <span>{item.fon}</span>
                <span>{item.address}</span>
                <span>{item.residence}</span>
            </div>)}
        </div>
    )
}