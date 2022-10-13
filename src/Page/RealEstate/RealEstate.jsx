import React from "react";
import Header from "../components/Header";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Section1 from "./components/Section1";
import { Container } from "@mui/system";
import Container1 from "./components/Container1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import DividerSection1 from "./components/DividerSection1";
import DividerSection2 from "./components/DividerSection2";
import BrandsSection from "./components/BrandsSection";
import PhotoSection from "./components/PhotoSection";

function RealEstate() { 

    return(
      <div>
        <Header />
        <Section1 />
        <Container1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <DividerSection1 />
        <DividerSection2 />
        <BrandsSection />
        <PhotoSection />
      </div>
    );
}

export default RealEstate;