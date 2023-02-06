import React from "react";
import style from "../Main.module.scss";
import {Presentation} from "../Presentation";

export const BestSeller = (props) => {

    return (
        <div className={style.cards}>
            {props.product.map(item => <Presentation item={item} />)}
        </div>
    )
}