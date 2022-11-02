import React from "react";
import Header from "../subComponents/Header";
import Rating from "../subComponents/Rating";
import ReceiverMessage from "./components/ReceiverMessage";
import SenderMessage from "./components/SenderMessage";

function MessageDetail() {
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
              <a href="/messages">Inbox</a>
            </li>
            <li className="breadcrumb-item active">Your messages with Anna </li>
          </ol>
          <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-md-center mb-4">
            <h1 className="mb-3 mb-md-0 hero-heading mb-0">
              Your messages with Anna
            </h1>
            <div>
              <a className="btn btn-link ps-0" href="/messages">
                <i className="fa fa-arrow-left me-2"></i> Back to all messages
              </a>
            </div>
          </div>
          <div className="card border-0 shadow mb-4">
            <div className="card-body p-4">
              <div className="text-block pb-3">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <h6>
                      {" "}
                      <a className="text-reset" href="/detail-room">
                        Modern Apt - Vibrant Neighborhood
                      </a>
                    </h6>
                    <p className="text-muted text-sm mb-0">
                      Entire home in New York
                    </p>
                    <div className="mt-n1">
                      <Rating
                        rating={4}
                        class1="fa fa-xs fa-star text-primary"
                        class2="fa fa-xs fa-star text-gray-200"
                      />
                    </div>
                  </div>
                  <a href="/detail-room">
                    <img
                      className="ms-3 rounded flex-shrink-0"
                      src="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/photo/photo-1512917774080-9991f1c4c750.jpg"
                      alt=""
                      width="100"
                    />
                  </a>
                </div>
              </div>
              <div className="text-block pt-3 pb-0">
                <ul className="list-unstyled text-sm mb-0">
                  <li className="mb-3">
                    <i className="fas fa-users fa-fw text-muted me-2"></i>3
                    guests
                  </li>
                  <li className="mb-0">
                    <i className="far fa-calendar fa-fw text-muted me-2"></i>Apr
                    17, 2019{" "}
                    <i className="fas fa-arrow-right fa-fw text-muted mx-3"></i>
                    Apr 18, 2019
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- Chat Box--> */}
          <div className="px-4 py-5">
            <div className="row">
              {/* <!-- Sender Message--> */}
              <SenderMessage
                profileImg="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/avatar/avatar-1.jpg"
                message="One morning, when Gregor Samsa woke from troubled dreams,
                      he found himself transformed in his bed into a horrible
                      vermin. He lay on his armour-like back, and if he lifted
                      his head a little he could see his brown belly, slightly
                      domed and divided by arches into stiff sections"
                time="12:00 PM"
                date="Aug 13"
              />
              {/* <!-- Reciever Message--> */}

              <ReceiverMessage
                time="12:00 PM"
                date="Aug 13"
                profileImg="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/avatar/avatar-10.jpg"
                message="he bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. &quot;What's happened to me?&quot; he thought. It wasn't a dream."
              />

              {/* <!-- Sender Message--> */}
              <SenderMessage
                profileImg="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/avatar/avatar-1.jpg"
                message=" His room, a proper human room although a little too small, lay
            peacefully between its four familiar walls. A collection of textile
            samples lay spread out on the table."
                time="12:00 PM"
                date="Aug 13"
              />

              {/* <!-- Reciever Message--> */}
              <ReceiverMessage
                time="12:00 PM"
                date="Aug 13"
                profileImg="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/avatar/avatar-10.jpg"
                message="Samsa was a travelling salesman - and above it there hung
                      a picture that he had recently cut out of an illustrated
                      magazine and housed in a nice, gilded frame."
              />
              {/* <!-- Sender Message--> */}
              <SenderMessage
                profileImg="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/avatar/avatar-1.jpg"
                message=" He must have tried it a hundred times, shut his eyes so that he wouldn't have to look at the floundering legs, and only stopped when he began to feel a mild, dull pain there that he had never felt before."
                time="12:00 PM"
                date="Aug 13"
              />

              {/* <!-- Reciever Message--> */}
              <ReceiverMessage
                time="12:00 PM"
                date="Aug 13"
                profileImg="https://d19m59y37dris4.cloudfront.net/directory/2-0/img/avatar/avatar-10.jpg"
                message="One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections"
              />
            </div>
          </div>
          {/* <!-- Typing area--> */}
          <form className="bg-light rounded shadow-sm" action="#">
            <div className="input-group">
              <textarea
                className="form-control border-0 p-4 bg-light text-sm"
                placeholder="Type a message"
                aria-describedby="button-sendMessage"
              ></textarea>
              <button
                className="btn btn-link"
                id="button-sendMessage"
                type="submit"
              >
                <i className="fa fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default MessageDetail;
