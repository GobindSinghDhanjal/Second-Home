import React from "react";
import MapIcon from '@mui/icons-material/Map';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ApartmentIcon from '@mui/icons-material/Apartment';

function Section4() {
    return(
        <section className="py-6">
        <div className="container">
          <div className="pb-lg-4">
            <p className="subtitle text-secondary">Why us?</p>
            <h2 className="mb-5">Discover the best investment opportunities around you</h2>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-4 mb-3 mb-lg-0">
              <div className="px-0 pe-lg-4">
                <div className="icon-rounded mb-3 bg-primary-light">
                    <MapIcon className=" w-2rem h-2rem "style={{ color: "#4E66F8" }}  xlinkHref="#destination-map-1"/>
                </div>
                <h3 className="h6 text-uppercase">Find the best investment area</h3>
                <p className="text-muted text-sm">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed in</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 mb-3 mb-lg-0">
              <div className="px-0 pe-lg-4">
                <div className="icon-rounded mb-3 bg-secondary-light">
                    <ApartmentIcon className=" w-2rem h-2rem "style={{ color: "#e83e8c" }} xlinkHref="#real-estate-1"/>
                </div>
                <h3 className="h6 text-uppercase">Purchase a property</h3>
                <p className="text-muted text-sm">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pit</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 mb-3 mb-lg-0">
              <div className="px-0 pe-lg-4">
                <div className="icon-rounded mb-3 bg-primary-light">
                    <ShowChartIcon className=" w-2rem h-2rem "style={{ color: "#4E66F8" }} xlinkHref="#pay-1" />
                </div>
                <h3 className="h6 text-uppercase">Profit</h3>
                <p className="text-muted text-sm">His room, a proper human room although a little too small, lay peacefully between its four familiar </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );

}

export default Section4;