import React from "react";
import style from "./Info.module.scss";


export const Info = (props) => {

    return(

        <div className={style.info} style={props.item.id % 2 !== 0 ? {padding: "170px 0 170px 210px", backgroundImage: `url(${props.item.background})`, color: "white"} : {padding: "170px 0 170px 710px", backgroundImage: `url(${props.item.background})`, color:"#323941", backgroundSize:"contain", textShadow: "#fdfdfc 6px 0 10px"}}>
                <h4>{props.item.title}</h4>
                <span>{props.item.text}</span>
        </div>
    )
}