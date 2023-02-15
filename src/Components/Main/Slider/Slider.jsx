import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.css";
import styles from "./Slider.module.scss";

const SliderItem = (props) => {
    return (
        <div className={styles.sliderItem}>

            <img src={props.item.img_header} style={{objectFit: "contain"}}/>
            <h6>{props.item.name_shot}</h6>
            <hr/>
            <span>{props.item.max_speed}</span>
            <hr/>
            <span>{props.item.max_distance}</span>
            <hr/>
            <span>{props.item.capacity}</span>
            <hr/>
            <span>{props.item.weight}</span>
            <hr/>
            <span>{props.item.carrying_capacity}</span>
            <hr/>
            <span>{props.item.charging_time}</span>
            <hr/>
            <span>{props.item.number_of_batteries}</span>
            <hr/>
            <span>{props.item.motor_power}</span>
            <hr/>
            <span>{props.item.output_power}</span>
            <hr/>
            <span>{props.item.maximum_tilt}</span>
            <hr/>
            <span>{props.item.backlight}</span>
            <hr/>
            <span>{props.item.security}</span>
            <hr/>
            <span><b>{props.item.price}</b></span>
            <hr/>
            <span></span>
        </div>
    );
};

export  const Slider = (props) => {
    const pagination = {
        clickable: true,
    };
    return (
        <section className={styles.promo}>
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.slider}>
                        <Swiper
                            cssMode={true}
                            navigation={true}
                            // pagination={true}
                            pagination={pagination}
                            mousewheel={true}
                            keyboard={true}
                            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                            className="mySwiper">

                            <SwiperSlide>
                                {props.slider_1.map(item => <SliderItem item={item} />)}
                            </SwiperSlide>

                            <SwiperSlide>
                                {props.slider_2.map(item => <SliderItem item={item} />)}
                            </SwiperSlide>

                            <SwiperSlide>
                                {props.slider_3.map(item => <SliderItem item={item} />)}
                            </SwiperSlide>

                            <SwiperSlide>
                                {props.slider_4.map(item => <SliderItem item={item} />)}
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};
