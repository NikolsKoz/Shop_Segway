import React from "react";
import {NavLink} from "react-router-dom";


export const ServButton = (props) => {
    return(
        <>
            {props.btn.map(item=> <NavLink to={item.link} style={({isActive}) => (
                isActive ? {backgroundColor: "#009EFF",
                    backgroundImage: `url(${item.btn_w})`} : {backgroundImage: `url(${item.btn})`}
            )}>
            </NavLink>)}
        </>
    )
}
