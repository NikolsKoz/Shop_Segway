import React from "react";
import style from "../Main.module.scss";

export const Accessories = (props) => {
    return(

        <div>
            <div className={style.cardAccessories}>
                <img src={props.item.img} alt=""/>
                <h4>{props.item.name}</h4>
                <p>{props.item.content}</p>
                <span>{props.item.price}</span>
            </div>
            <button>ADD TO BASKET</button>
        </div>
    )
}