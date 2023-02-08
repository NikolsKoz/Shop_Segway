import style from './App.module.scss';
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";
import {Footer} from "./Components/Footer/Footer";
import React from "react";
import articles from "./data/articles.json";

function App() {

    return (
        <div className={style.App}>
            <Header/>
            <Main product={articles.products} card={articles.card} icons={articles.icons} accessories={articles.accessories} button={articles.button} info={articles.info} specification={articles.specifications}/>)}
            <Footer />
        </div>
    );
}

export default App;
