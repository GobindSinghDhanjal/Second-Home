import React, { useEffect } from "react";
import Header from "../subComponents/Header";
import Herohome2 from "./components/Herohome2";
import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import Banner3 from "./components/Banner3";
import Banner4 from "./components/Banner4";
import Banner5 from "./components/Banner5";
import Banner6 from "./components/Banner6";
import Banner7 from "./components/Banner7";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomes } from "../../Redux";
import { useAuth0 } from "@auth0/auth0-react";
import { CircularProgress } from "@mui/material";
import LoadingProgress from "../subComponents/LoadingProgress";

function Home() {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchHomes());
  // }, []);

  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <LoadingProgress />
    )
  }

  return (
    <div>
      <Header />
      <Herohome2 />
      <Banner />
      <Banner3 />
      <Banner2 />

      <Banner4 />
      <Banner5 />
      <Banner6 />
      <Banner7 />
    </div>
  );
}

export default Home;
