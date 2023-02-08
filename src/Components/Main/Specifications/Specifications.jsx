import React from "react";
import style from "../Main.module.scss";


export const Specifications = (props) => {


    return (

        <div className={style.contSpec}>
                <img src={props.item.img_header}/>
                <h6>{props.item.name_shot}</h6><hr/>
                <span>{props.item.max_speed}</span><hr/>
                <span>{props.item.max_distance}</span><hr/>
                <span>{props.item.capacity}</span><hr/>
                <span>{props.item.weight}</span><hr/>
                <span>{props.item.carrying_capacity}</span><hr/>
                <span>{props.item.charging_time}</span><hr/>
                <span>{props.item.number_of_batteries}</span><hr/>
                <span>{props.item.motor_power}</span><hr/>
                <span>{props.item.output_power}</span><hr/>
                <span>{props.item.maximum_tilt}</span><hr/>
                <span>{props.item.backlight}</span><hr/>
                <span>{props.item.security}</span><hr/>
            <span><b>{props.item.price}</b></span><hr/>
        </div>

    )
}