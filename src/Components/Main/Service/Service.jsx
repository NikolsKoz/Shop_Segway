import React from "react";
import style from "./Service.module.scss";
import {ServButton} from "./ServButton";
import {ServContent} from "./ServContent";

export const Service = (props) => {



    return(
            <div className={style.service}>
                <div className={style.btn}>
                    <ServButton btn={props.button}/>
                </div>
                <div className={style.cont}>
                    <ServContent button_1={props.button[0]} button_2={props.button[1]} button_3={props.button[2]} button_4={props.button[3]}/>
                </div>
            </div>
    )
}
