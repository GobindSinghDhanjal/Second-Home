import React from "react";
import Home from "./Home/Home";
import SignUp from "./User/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./User/Profile";
import Account from "./Account/Account";
import BookingDetails from "./User/BookingDetails";
import Contact from "./Pages/Contact";
import SignIn from "./User/SignIn";
import Rooms from "./Rooms/Rooms";
import AddListing from "./AddListing/AddListing";
import RealEstate from "./RealEstate/RealEstate";
import Invoice from "./User/Invoice";
import PersonalInfo from "./Account/PersonalInfo";
import Security from "./Account/Security";
import UserAdd1 from "./AddListing/UserAdd1";
import UserAdd2 from "./AddListing/UserAdd2";
import UserAdd4 from "./AddListing/UserAdd4";
import UserAdd3 from "./AddListing/UserAdd3";
import UserAdd5 from "./AddListing/UserAdd5";
import Category from "./Category/Category";
import Blog from "./Blog/Blog";
import Detail from "./Detail/Detail";
import { Provider } from "react-redux";
import store from "../Redux/store";
import Auth0ProviderWithHistory from "../auth0provider";
import { ReactSession } from "react-client-session";
import Post from "./Blog/Post";
import Team from "./Pages/Team";
import Faq from "./Pages/Faq";
import ComingSoon from "./Pages/ComingSoon";
import ErrorPage from "./Pages/ErrorPage";
ReactSession.setStoreType("localStorage");

function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Auth0ProviderWithHistory>
            <Routes>
              {/***************** HOME *****************/}
              <Route path="/" element={<Home />} />

              {/***************** ACCOUNT *****************/}
              <Route path="/account" element={<Account />} />
              <Route path="/personalInfo" element={<PersonalInfo />} />
              <Route path="/user-security" element={<Security />} />

              {/***************** ADD LISTING *****************/}
              <Route path="/addListing" element={<AddListing />} />
              <Route path="/user-add-1" element={<UserAdd1 />} />
              <Route path="/user-add-2" element={<UserAdd2 />} />
              <Route path="/user-add-3" element={<UserAdd3 />} />
              <Route path="/user-add-4" element={<UserAdd4 />} />
              <Route path="/user-add-5" element={<UserAdd5 />} />

              {/***************** BLOG *****************/}
              <Route path="/blog" element={<Blog />} />


              {/***************** CATEGORY *****************/}
              <Route path="/category" element={<Category />} />

              {/***************** DETAIL *****************/}
              <Route path="/detail" element={<Detail />} />

             

               {/***************** PAGES *****************/}
               <Route path="/contact" element={<Contact />} />
               <Route path="/coming-soon" element={<ComingSoon />} />
               <Route path="/error-page" element={<ErrorPage />} />
               <Route path="/faq" element={<Faq />} />
               <Route path="/team" element={<Team />} />

             

              {/***************** POST *****************/}
              <Route path="/post" element={<Post />} />

              {/*************    REAL ESTATE    *************/}
              <Route path="/realEstate" element={<RealEstate />} />

              {/**************** ROOMS ******************/}
              <Route path="/rooms" element={<Rooms />} />

              {/*************     USER     **************/}
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/booking-details" element={<BookingDetails />} />
              <Route path="/invoice" element={<Invoice />} />
            </Routes>
          </Auth0ProviderWithHistory>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
