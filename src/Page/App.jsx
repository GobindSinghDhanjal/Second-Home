import React from "react";
import Home from "./Home/Home";
import SignUp from "./User/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Profile from "./User/Profile";
import Account from "./Account/Account";
import BookingDetails from "./User/BookingDetails";
import Contact from "./Contact/Contact";
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
import { Provider } from "react-redux";
import store from '../Redux/store';


function App() {
    return( 
        <Provider store={store}>
    <div>
     <BrowserRouter>
      <Routes>

         {/***************** HOME *****************/}
          <Route path="/"  element={<Home />} />


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


         {/***************** CONTACT *****************/}
         <Route path="/contact" element={<Contact />} />

         {/***************** CATEGORY *****************/}
         <Route path="/category" element={<Category />} />

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
    </BrowserRouter>
    </div>
    </Provider>
    );
}
   

export default App;