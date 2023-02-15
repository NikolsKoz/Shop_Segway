import style from './App.module.scss';
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";
import {Footer} from "./Components/Footer/Footer";
import React from "react";
import articles from "./data/articles.json";

function App() {

    return (
        <div className={style.App}>
            <Header links={articles.links}/>
            <Main product={articles.products} card={articles.card} icons={articles.icons} accessories={articles.accessories} button={articles.button} info={articles.info} specification={articles.specifications} slider_1={articles.slider_1} slider_2={articles.slider_2} slider_3={articles.slider_3} slider_4={articles.slider_4} control={articles.control}/>
            <Footer links={articles.links} contacts={articles.contacts}/>
        </div>
    )
}

export default App;