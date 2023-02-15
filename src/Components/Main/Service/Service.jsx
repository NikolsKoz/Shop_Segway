import React, {useState} from "react";
import style from "./Service.module.scss";
// import {ServButton} from "./ServButton";
// import {ServContent} from "./ServContent";
// import {Route, Routes, useNavigate} from "react-router-dom";
import classNames from "classnames";



export const Service = (props) => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = index => {
        setToggleState(index);
    };


    return (
            <div className={style.service}>
                <div className={style.serviceBtn}>
                    <div className={style.btn}>
                        <div className={toggleState === 1
                            ? classNames(style.servNav, style.activeNav)
                            : classNames(style.servNav)
                        } onClick={() => toggleTab(1)} style={{backgroundImage:`url(${props.button[0].btn})`}}>

                        </div>

                        <div className={toggleState === 2
                            ? classNames(style.servNav, style.activeNav)
                            : classNames(style.servNav)
                        } onClick={() => toggleTab(2)} style={{backgroundImage:`url(${props.button[1].btn})`}}>

                        </div>

                        <div className={toggleState === 3
                            ? classNames(style.servNav, style.activeNav)
                            : classNames(style.servNav)
                        } onClick={() => toggleTab(3)} style={{backgroundImage:`url(${props.button[2].btn})`}}>

                        </div>

                        <div className={toggleState === 4
                            ? classNames(style.servNav, style.activeNav)
                            : classNames(style.servNav)
                        } onClick={() => toggleTab(4)} style={{backgroundImage:`url(${props.button[3].btn})`}}>

                        </div>
                    </div>
                </div>
                <div className={style.cont}>
                        <div className={toggleState === 1
                            ? classNames(style.servwrap, style.activeContent)
                            : classNames(style.servwrap)}>
                            <div className={style.textBlock}>
                                <h4>{props.button[0].title}</h4>
                                <p>{props.button[0].content}</p>
                            </div>
                            <img src={props.button[0].logo} alt=""/>
                        </div>
                        <div className={toggleState === 2
                            ? classNames(style.servwrap, style.activeContent)
                            : classNames(style.servwrap)}>
                            <div className={style.textBlock}>
                                <h4>{props.button[1].title}</h4>
                                <p>{props.button[1].content}</p>
                            </div>
                            <img src={props.button[1].logo} alt=""/>
                        </div>
                        <div className={toggleState === 3
                            ? classNames(style.servwrap, style.activeContent)
                            : classNames(style.servwrap)}>
                            <div className={style.textBlock}>
                                <h4>{props.button[2].title}</h4>
                                <p>{props.button[2].content}</p>
                            </div>
                            <img src={props.button[2].logo} alt=""/>
                        </div>
                        <div className={toggleState === 4
                            ? classNames(style.servwrap, style.activeContent)
                            : classNames(style.servwrap)}>
                            <div className={style.textBlock}>
                                <h4>{props.button[3].title}</h4>
                                <p>{props.button[3].content}</p>
                            </div>
                            <img src={props.button[3].logo} alt=""/>
                        </div>


                </div>
            </div>
    )
}