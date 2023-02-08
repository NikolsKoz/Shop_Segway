import React from "react";
import style from "../Main.module.scss";

export const Features = (props) => {
    return(
        <div className={style.gridCont}>
            <img src={props.item.svg}/>
            <p>{props.item.name}</p>
            <span>{props.item.content}</span>
        </div>
    )
}