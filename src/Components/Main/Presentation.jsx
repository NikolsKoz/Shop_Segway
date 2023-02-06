import React from "react";
import style from "../Main/Main.module.scss";
import {NavLink} from "react-router-dom";


export const Presentation = (props) => {

    return (
        <>
            <NavLink to={props.item.link} style={({isActive }) => ({
                backgroundColor: isActive ? "#009EFF" : "",
                color: isActive ? "white" : ""})}>
                <div className={style.card}>
                    <img src={props.item.img_header} alt=""/>
                    <h4>{props.item.name_shot}</h4>
                </div>
            </NavLink>
        </>
    )
}
