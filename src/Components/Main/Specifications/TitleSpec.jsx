import React from "react";
import style from "../Main.module.scss";


export const TitleSpec = (props) => {
    return (
        <>
            <div className={style.titleSpec}>
                <img src={props.item.icon} />
                <span>{props.item.name}</span>
            </div>
            <hr/>
        </>
    )
}