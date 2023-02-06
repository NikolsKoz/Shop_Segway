import React from "react";
import style from "./Product.module.scss";

export const Card = (props) => {
    return(
                <img className={style.pay} src={props.svg}/>
    )
}