import React from "react";
import style from "./Product.module.scss";
import {Card} from "./Card";


export const Product_2 = (props) => {

    return (
        <div className={style.product}>
            <div className={style.wrap}>
                <div className={style.lot}>
                    <h2>{props.product.name}</h2>
                    <div>
                        <div className={style.guarantee}>
                            <h6>Add an extended warranty from Extend</h6>
                            <div className={style.year}>
                                <div><span>1 Year - $139</span></div>
                                <div><span>2 Year - $209</span></div>
                                <div><span>3 Year - $279</span></div>
                            </div>
                            <div className={style.price}>
                                <div className={style.box}><h4>{props.product.price_start}</h4><h3>{props.product.price}</h3></div>
                                <div className={style.box}>
                                    <span>Segway Protective Gear Set as a gift</span>
                                </div>
                                <div className={style.box}>
                                    <img src="https://drive.google.com/uc?id=15qAIpEQ3Zv47QR2K6OFrFbICQ7Mppm4w" alt=""/>
                                </div>
                            </div>
                            <div className={style.buttons}>
                                <button className={style.btn_price}>BUY IT NOW</button>
                                <button className={style.btn_price}>ADD TO BASKET</button>
                            </div>
                        </div>{/*------.guarantee*/}

                        <div className={style.card}>
                            <p>Payment Methods:<span>Starting at $55/mo with.</span></p>
                            <div>
                                {props.card.map(item => <Card key={item.id} svg = {item.link}/>)}
                            </div>
                        </div>
                    </div>

                </div>{/*------.lot*/}
                <img className={style.image} src={props.product.img_main} alt="photo"/>
            </div>
        </div> /*-----.product*/
    )
}