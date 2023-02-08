import React from "react";
import style from "../Main/Main.module.scss";
import {Route, Routes} from "react-router-dom";
import {Product} from "./Product/Product";
import {Product_2} from "./Product/Product_2";
import {Service} from "./Service/Service";
import {BestSeller} from "./BestSeller/BestSeller";
import {Accessories} from "./Accessories/Accessories";
import {Features} from "./Features";
import {Overview} from "./Overview/Overview";
import {Info} from "./Info/Info";
import {Specifications} from "./Specifications/Specifications";
import {TitleSpec} from "./Specifications/TitleSpec";


export const Main = (props) => {
    return(

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
                            <Route path="/Shop_Segway"
                                   element={<Product product={props.product[0]} card={props.card}/>}/>
                            {props.product.map(item =><Route path={`/Shop_Segway/products/${item.id}`}
                                   element={<Product_2 product={item} card={props.card}/>}/>)}
                        </Routes>

                    </div>
                    <Service button={props.button}/>
                    <div className={style.show}>
                    </div>
                </div>
                <div className={style.accessories}>
                    <h2>ACCESSORIES</h2>
                    <div className={style.wrapAccessories}>
                        {props.accessories.map(item => <Accessories item={item}/>)}
                    </div>
                </div>
                <div className={style.features}>
                    <h2>IMPRESSIVE FEATURES</h2>
                    <div className={style.gridFeatures}>
                        {props.icons.map(item => <Features item = {item}/>)}
                    </div>
                </div>
                <Overview/>
                <div className={style.wrapInfo}>
                    {props.info.map(item => <Info item={item}/>)}
                </div>
                <div className={style.specifications}>
                    <h2>compare specifications</h2>
                    <div className={style.wrapSpec}>
                        <div className={style.boxSpec_1}>
                            {props.specification.map(item => <TitleSpec item={item}/>)}
                        </div>
                        <div className={style.boxSpec_2}>
                            {props.product.map(item => <Specifications item={item}/>)}
                        </div>

                    </div>
                </div>
            </div>
)
}