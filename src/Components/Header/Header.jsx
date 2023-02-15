import React, {useState} from "react";
import style from "./Header.module.scss";
import {Logo_header} from "../../assets/img/svg";
import manager from "../../assets/img/Photo-manager.png";
import { Link } from "react-scroll";
import Navbar from "./Navbar";
import {ModalWindow} from "../ModalWindow/ModalWindow";

export const Header = () => {
    const [modalActive, setModalActive] = useState(false)
    return (
        <div id={"home"} className={style.header}>
            <div className={style.navbar}>
                <Navbar />
            </div>

                <div className={style.contacts}>
                </div>

            <div className={style.logo}>
                <Link to="/Shop_Segway">
                    <Logo_header />
                </Link>
                <div className={style.manager}>
                    <img src={manager} alt="photo-manager"/>
                    <div className={style.ask}>
                        <span>JOHN SMITH</span><br/>
                        <button className={style.open_btn} onClick={()=> setModalActive(true)}>ask a question manager</button>
                    </div>
                </div>
            </div>
            <ModalWindow active={ modalActive} setActive={setModalActive}>
                <div className={style.wrapForma}>
                    <div className={style.photo}>
                        <img src={manager} alt="photo-manager"/>
                    </div>
                    <div className={style.forma}>
                        <form action="">
                            Name<br/>
                            <input type="text" placeholder="Enter your Name"/><br/>
                            Phone<br/>
                            <input type="text" placeholder="Enter your phone (e.g.+12344456788)"/><br/>
                            Message<br/>
                            <textarea rows="5" placeholder="Enter your message"></textarea><br/>
                            <button>SEND</button>
                        </form>
                    </div>
                </div>
            </ModalWindow>
        </div>
    )
}