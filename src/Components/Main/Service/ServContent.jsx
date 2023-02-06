import React from "react";
import style from "./Service.module.scss";
import {Route, Routes} from "react-router-dom";



export const ServContent = (props) => {

    return(
        <>
            <Routes>
                <Route path="/ShopSegway/*"
                       element={<>
                           <div className={style.servwrap}>
                               <h4>{props.button_1.title}</h4>
                               <p>{props.button_1.content}</p>
                           </div>
                           <img src={props.button_1.logo} alt=""/>
                       </>}/>

                <Route path="/ShopSegway/button/1"
                       element={<>
                           <div className={style.servwrap}>
                               <h4>{props.button_1.title}</h4>
                               <p>{props.button_1.content}</p>
                           </div>
                           <img src={props.button_1.logo} alt=""/>
                       </>}/>

                <Route path="/ShopSegway/button/2"
                       element={<>
                           <div className={style.servwrap}>
                               <h4>{props.button_2.title}</h4>
                               <p>{props.button_2.content}</p>
                           </div>
                           <img src={props.button_2.logo} alt=""/>
                       </>}/>

                <Route path="/ShopSegway/button/3"
                       element={<>
                           <div className={style.servwrap}>
                               <h4>{props.button_3.title}</h4>
                               <p>{props.button_3.content}</p>
                           </div>
                           <img src={props.button_3.logo} alt=""/>
                       </>}/>

                <Route path="/ShopSegway/button/4"
                       element={<>
                           <div className={style.servwrap}>
                               <h4>{props.button_4.title}</h4>
                               <p>{props.button_4.content}</p>
                           </div>
                           <img src={props.button_4.logo} alt=""/>
                       </>}/>
            </Routes>
        </>

    )
}