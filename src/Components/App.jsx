import React from "react";
import Home from "./Home/Home";
import SignUp from "./User/SignUp";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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
import { ReactSession } from "react-client-session";
import Post from "./Blog/Post";
import Team from "./Pages/Team";
import Faq from "./Pages/Faq";
import ComingSoon from "./Pages/ComingSoon";
import ErrorPage from "./Pages/ErrorPage";
import Terms from "./Pages/Terms";
import UserBooking1 from "./User/BookingProcess/UserBooking1";
import UserBooking2 from "./User/BookingProcess/UserBooking2";
import UserBooking3 from "./User/BookingProcess/UserBooking3";
import UserBooking4 from "./User/BookingProcess/UserBooking4";
import Category1 from "./Category/Category1";
import DetailRoom from "./Detail/DetailRoom";
import Messages from "./User/Messages";
import MessageDetail from "./User/MessageDetail";
import AllBookings from "./User/AllBookings";
import ScrollToTop from "../scrollToTop";
ReactSession.setStoreType("localStorage");


function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
        <ScrollToTop/>
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

              {/***************** ALL BOOKINGS *****************/}
              <Route path="/all-bookings" element={<AllBookings />} />

              {/***************** BLOG *****************/}
              <Route path="/blog" element={<Blog />} />

              {/***************** BOOKING PROCESS *****************/}
              <Route path="/user-booking-1" element={<UserBooking1 />} />
              <Route path="/user-booking-2" element={<UserBooking2 />} />
              <Route path="/user-booking-3" element={<UserBooking3 />} />
              <Route path="/user-booking-4" element={<UserBooking4 />} />

              {/***************** CATEGORY *****************/}
              <Route path="/category-1" element={<Category1 />} />
              <Route path="/category" element={<Category />} />

              {/***************** DETAIL *****************/}
              <Route path="/detail" element={<Detail />} />
              <Route path="/detail-room" element={<DetailRoom />} />

              {/***************** MESSGAES *****************/}
              <Route path="/messages" element={<Messages />} />
              <Route path="/messages-detail" element={<MessageDetail />} />

              {/***************** PAGES *****************/}
              <Route path="/contact" element={<Contact />} />
              <Route path="/coming-soon" element={<ComingSoon />} />
              <Route path="/error-page" element={<ErrorPage />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/team" element={<Team />} />
              <Route path="/terms" element={<Terms />} />

              {/***************** POST *****************/}
              <Route path="/post" element={<Post />} />

              {/*************    REAL ESTATE    *************/}
              <Route path="/real-estate" element={<RealEstate />} />

              {/**************** ROOMS ******************/}
              <Route path="/rooms" element={<Rooms />} />

              {/*************     USER     **************/}
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/booking-details" element={<BookingDetails />} />
              <Route path="/invoice" element={<Invoice />} />
            </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
