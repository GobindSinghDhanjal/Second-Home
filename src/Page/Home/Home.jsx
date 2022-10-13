import React from "react";
import Header from "../components/Header";
import Herohome2 from "./components/Herohome2";
import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import Banner3 from "./components/Banner3";
import Banner4 from "./components/Banner4";
import Banner5 from "./components/Banner5";
import Banner6 from "./components/Banner6";
import Banner7 from "./components/Banner7";


function Home() {
    return(
        <div>
            <Header />
            <Herohome2 />
            <Banner />
            <Banner2 />
            <Banner3 />
            <Banner4 />
            <Banner5 />
            <Banner6/>
            <Banner7 />
        </div>
      
    );
}

export default Home;