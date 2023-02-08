import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Service.module.scss";


export const ServButton = (props) => {
    return(
        <div className={style.btn}>
            {props.btn.map(item=> <NavLink to={item.link} style={({isActive}) => (
                isActive ? {backgroundColor: "#009EFF",
                    backgroundImage: `url(${item.btn_w})`} : {backgroundImage: `url(${item.btn})`}
            )}>
            </NavLink>)}
        </div>
    )
}
