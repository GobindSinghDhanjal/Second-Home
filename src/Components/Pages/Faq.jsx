import React from "react";
import Header from "../subComponents/Header";

function Faq() {
    return(
        <div>
        <Header />
        <section className="hero py-5 py-lg-7">
      <div className="container position-relative">
        {/* <!-- Breadcrumbs --> */}
        <ol className="breadcrumb ps-0  justify-content-center">
          <li className="breadcrumb-item"><a href="index-2.html">Home</a></li>
          <li className="breadcrumb-item active">Frequently asked questions                         </li>
        </ol>
        <h1 className="hero-heading">F.A.Q.s</h1>
        <div className="row">
          <div className="col-xl-8 mx-auto"><p className="text-muted">As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity. </p></div>
        </div>
      </div>
    </section>
    {/* <!-- FAQ--> */}
    <section className="py-6">
      <div className="container">
        <div className="py-4">
          <h2 className="mb-5 text-primary">Shopping</h2>
          <div className="row">
            <div className="col-md-6">
              <h5>What shipping method does Sell use?</h5>
              <p className="text-muted mb-4">His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table.</p>
              <h5>What countries do you to?</h5>
              <p className="text-muted mb-4">Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.</p>
            </div>
            <div className="col-md-6">
              <h5>One of my items is missing</h5>
              <p className="text-muted mb-4">He must have tried it a hundred times, shut his eyes so that he wouldn't have to look at the floundering legs, and only stopped when he began to feel a mild, dull pain there that he had never felt before.</p>
              <h5>Remote areas - delivery</h5>
              <p className="text-muted mb-4">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections</p>
            </div>
          </div>
        </div>
        <hr/>
        <div className="py-4">
          <h2 className="mb-5 text-primary">Payment</h2>
          <div className="row">
            <div className="col-md-6">
              <h5>Can I pay COD - cash on delivery?</h5>
              <p className="text-muted mb-4">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections</p>
              <h5>Payment methods accepted</h5>
              <p className="text-muted mb-4">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. &quot;What's happened to me?&quot; he thought. It wasn't a dream.</p>
            </div>
            <div className="col-md-6">
              <h5>What is Paypal?</h5>
              <p className="text-muted mb-4">His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table.</p>
              <h5>How do the conversion rates work</h5>
              <p className="text-muted mb-4">Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.</p>
            </div>
          </div>
        </div>
        <hr/>
        <div className="py-4">
          <h2 className="mb-5 text-primary">Warranty and return</h2>
          <div className="row">
            <div className="col-md-6">
              <h5>My product has a problem what should I do?</h5>
              <p className="text-muted mb-4">He must have tried it a hundred times, shut his eyes so that he wouldn't have to look at the floundering legs, and only stopped when he began to feel a mild, dull pain there that he had never felt before.</p>
              <h5>What if the product is broken?</h5>
              <p className="text-muted mb-4">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections</p>
            </div>
            <div className="col-md-6">
              <h5>Why should I buy insurance at the checkout?</h5>
              <p className="text-muted mb-4">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections</p>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    )
}

export default Faq;