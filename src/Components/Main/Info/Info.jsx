import React from "react";
import style from "./Info.module.scss";


export const Info = (props) => {
    function isEven(num) {
        return num % 2 === 0;
    }

    return(

        <div className={style.info} style={{
            backgroundImage: `url(${props.item.background})`,
            padding: "170px 0 170px 210px"
        }}>
            <div className={style.textInfo}>
                <h4>{props.item.title}</h4>
                <span>{props.item.text}</span>
            </div>
        </div>
    )
}