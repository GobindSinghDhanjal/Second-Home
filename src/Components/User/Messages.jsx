import React from "react";
import { messages } from "../../shared/data";
import Header from "../subComponents/Header";
import Message from "./components/Message";

function Messages() {
  return (
    <div>
      <Header />
      <br />
      <br />
      <section className="py-5">
        <div className="container">
          {/* <!-- Breadcrumbs --> */}
          <ol className="breadcrumb ps-0  justify-content-start">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="user-account.html">Account</a>
            </li>
            <li className="breadcrumb-item active">Messages </li>
          </ol>
          <div className="d-flex justify-content-between align-items-center mb-5">
            <h1 className="hero-heading mb-0">Inbox</h1>
            <a className="btn btn-link text-muted" href="#">
              Archived Messages
            </a>
          </div>
          <div className="d-flex justify-content-between align-items-end mb-4">
            <select
              className="selectpicker me-3 mb-3 mb-lg-0"
              name="bulk"
              id="form_bulk"
              data-style="btn-selectpicker"
              title="Bulk Actions"
            >
              <option value="bulk_0">Edit </option>
              <option value="bulk_1">Archive </option>
              <option value="bulk_2">Delete </option>
            </select>
            <div>
              <label className="form-label me-2" for="form_sort">
                Sort by
              </label>
              <select
                className="selectpicker me-3 mb-3 mb-lg-0"
                name="sort"
                id="form_sort"
                data-style="btn-selectpicker"
                title=""
              >
                <option value="sortBy_0">Newest </option>
                <option value="sortBy_1">Oldest </option>
                <option value="sortBy_2">Paid </option>
              </select>
            </div>
          </div>
          <div className="list-group shadow mb-5">
            {messages.map((message) => {
              return (
                <Message
                id={message.id}
                  name={message.name}
                  profileImg={message.profileImg}
                  type={message.type}
                  date={message.date}
                  favourite={message.favourite}
                  message={message.message}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Messages;
