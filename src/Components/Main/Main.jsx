import React from "react";
import style from "../Main/Main.module.scss";
import {Route, Routes} from "react-router-dom";
import {Product} from "./Product/Product";
import {Product_2} from "./Product/Product_2";
import {Service} from "./Service/Service";
import {BestSeller} from "./BestSeller/BestSeller";
import {Accessories} from "./Accessories/Accessories";
import {Features} from "./Features/Features";
import {Overview} from "./Overview/Overview";
import {Info} from "./Info/Info";
import {TitleSpec} from "./Specifications/TitleSpec";
import {Slider} from "./Slider/Slider";

export const Main = (props) => {
    return (

        <div className={style.main}>
            <div className={style.grey}>
                <div className={style.presentation}>
                    <BestSeller product={props.product}/>
                </div>

                <div className={style.action}>
                    <p>FREE 1 DAY SHIPING WITHIN CALIFORNIA.</p>
                </div>

                <div className={style.prod_show}>

                    <Routes>
                        <Route path="/*"
                               element={<Product product={props.product[0]} card={props.card}/>}/>
                        {props.product.map(item => <Route path={`/Shop_Segway/products/${item.id}`}
                                                          element={<Product_2 product={item} card={props.card}/>}/>)}
                    </Routes>

                </div>
                <Service button={props.button}/>
            </div>
            <div id={"accessories"} className={style.accessories}>
                <h2>ACCESSORIES</h2>
                <div className={style.wrapAccessories}>
                    {props.accessories.map(item => <Accessories item={item}/>)}
                </div>
            </div>
            <div className={style.features}>
                <h2>IMPRESSIVE FEATURES</h2>
                <div className={style.gridFeatures}>
                    {props.icons.map(item => <Features item={item}/>)}
                </div>
            </div>
            <Overview/>
            <div id={"presentation"} className={style.wrapInfo}>
                {props.info.map(item => <Info item={item}/>)}
            </div>
            <div id={"specifications"} className={style.specifications}>
                <h2>compare specifications</h2>
                <div className={style.wrapSpec}>
                    <div className={style.boxSpec_1}>
                        {props.specification.map(item => <TitleSpec item={item}/>)}
                    </div>
                    <div className={style.boxSpec_2}>
                        <Slider slider_1={props.slider_1} slider_2={props.slider_2} slider_3={props.slider_3}
                                slider_4={props.slider_4}/>
                    </div>
                </div>
            </div>
            <div className={style.control}>
                <h2>Control from your smartphone</h2>
                <p>You can easily control your Segway electric scooter with your smartphone via Bluetooth. Not being
                    the <br/>key to the kickscooter, it will give a signal in case of an attempt to steal. Check the
                    current speed, data <br/> on the status of the device's systems or set the speed limit with a few
                    touches. <br/>And the skating training program is indispensable for beginners.</p>
                <div className={style.wrapControl}>
                    <div className={style.blockIcons}>
                        {props.control.map(item => <div className={style.iconsControl}>
                            <img src={item.link} alt="icon"/>
                            <span>{item.text}</span>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}