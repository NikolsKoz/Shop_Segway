import React from "react";
import style from "./Overview.module.scss";

export const Overview = () => {
    return(
        <div className={style.overview}>
            <h2>KICKSCOOTER OVERVIEW SEGWAY NIDEBOT KICKSCOOTER MAX</h2>
            <div className={style.wrapOverview}>
                <img src="https://drive.google.com/uc?id=1iVGTROd5ifTm3vTWD6ubC78Q8P19mSvq"/>
                <ol type="1">
                    <li>Electronic Throttle</li>
                    <li>Bell</li>
                    <li>Brake Lewer</li>
                    <li>Headlight</li>
                    <li>Quick Release Lever</li>
                    <li>Folding Mechanism</li>
                    <li>Front Fork</li>
                    <li>Drum Brake</li>
                    <li>Dashboard & Power Button</li>
                    <li>Stem</li>
                    <li>Battery Compartment</li>
                    <li>Charge Port</li>
                    <li>Kickstand</li>
                    <li>Buckle</li>
                    <li>Rear Fender</li>
                    <li>Brake Light</li>
                    <li>Hub Motor</li>
                </ol>
            </div>
        </div>
    )
}