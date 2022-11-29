import React, { useEffect, useState } from "react";
import Header from "../subComponents/Header";
import Card1 from "../subComponents/Card1";
import axios from "axios";
import LoadingButton from "@mui/lab/LoadingButton";
import MultipleLocationMap from "../subComponents/MultipleLocationMap";
import { useSearchParams } from "react-router-dom";
import { backendUrl } from "../../shared/backendUrl";

function Category() {

  const [searchParams] = useSearchParams();
  // const location = searchParams.get("location");

  const [ location, setLocation] = useState(searchParams.get("location"));

  console.log(location);


  const [center, setCenter] = useState([]);

  const [loading, setLoading] = useState(false);

  const [places, setPlaces] = useState([]);
  const [loadingButton, setLoadingButton] = useState("block");

  const [homePageNumber, setHomePageNumber] = useState(1);

  function handleClick() {
    setLoading(true);
    if(places.length >1){
      setHomePageNumber(homePageNumber + 1);
    }
  
    setLoading(false);

  }

  useEffect(() => {
    axios
      .get(backendUrl+"/homes/" +location+"/"+ homePageNumber.toString())
      .then((response) => {
        if (response.data.length < 1) {
          setLoading(false);
          setLoadingButton("none");
          return;
        }

        const arr = places.concat(response.data);
        setPlaces(arr);
     

        if (arr.length > 0) {
        
          const mapArr = arr.map((place) => {
            return {
              lat: place.coordinates.latitude,
              lng: place.coordinates.longitude,
            };
          });
          setCenter(mapArr);
        }
      })
      .catch((error) => {
        const errorMsg = error.message;
        console.log(errorMsg);
      });
  }, [homePageNumber, loadingButton]);

  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 py-5 p-xl-5">
            {/* <h1 className="text-serif mb-4">Eat in Manhattan, NY</h1>
            <hr className="my-4" /> */}
            {/* <form action="#">
              <div className="row">
                <div className="col-xl-4 col-md-6 mb-4">
          
                  <div className="input-label-absolute input-label-absolute-right">
                    <div className="label-absolute">
                      <i className="fa fa-search"></i>
                    </div>
                    <TextField
                      label="Keyword"
                      variant="outlined"
                      name="search"
                      placeholder="Keywords"
                      id="form_search"
                    />
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 mb-4">
                  <Neighbour />
                </div>
                <div className="col-xl-4 col-md-6 mb-4">
                  <SubCategory />
                </div>
                <div className="col-12 mb-4">
                  <label className="form-label">Tag</label>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="type_0"
                          name="type[]"
                        />
                        <label className="form-check-label" for="type_0">
                          Hipster
                        </label>
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="type_1"
                          name="type[]"
                        />
                        <label className="form-check-label" for="type_1">
                          Music club
                        </label>
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="type_2"
                          name="type[]"
                        />
                        <label className="form-check-label" for="type_2">
                          Bar
                        </label>
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="type_3"
                          name="type[]"
                        />
                        <label className="form-check-label" for="type_3">
                          Pub
                        </label>
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="type_4"
                          name="type[]"
                        />
                        <label className="form-check-label" for="type_4">
                          Deli
                        </label>
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="type_5"
                          name="type[]"
                        />
                        <label className="form-check-label" for="type_5">
                          Bistro
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-12 pb-4">
                  <div className="collapse" id="moreFilters">
                    <div className="mb-4">
                      <label className="form-label">Cuisine</label>
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="cuisine_0"
                              name="cuisine[]"
                            />
                            <label className="form-check-label" for="cuisine_0">
                              Fusion
                            </label>
                          </div>
                        </li>
                        <li className="list-inline-item">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="cuisine_1"
                              name="cuisine[]"
                            />
                            <label className="form-check-label" for="cuisine_1">
                              Indian
                            </label>
                          </div>
                        </li>
                        <li className="list-inline-item">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="cuisine_2"
                              name="cuisine[]"
                            />
                            <label className="form-check-label" for="cuisine_2">
                              French
                            </label>
                          </div>
                        </li>
                        <li className="list-inline-item">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="cuisine_3"
                              name="cuisine[]"
                            />
                            <label className="form-check-label" for="cuisine_3">
                              American
                            </label>
                          </div>
                        </li>
                        <li className="list-inline-item">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="cuisine_4"
                              name="cuisine[]"
                            />
                            <label className="form-check-label" for="cuisine_4">
                              Mexican
                            </label>
                          </div>
                        </li>
                        <li className="list-inline-item">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="cuisine_5"
                              name="cuisine[]"
                            />
                            <label className="form-check-label" for="cuisine_5">
                              Other
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 mb-4">
                        <label className="form-label">Price</label>
                        <div className="text-primary" id="slider-snap"></div>
                        <div className="nouislider-values">
                          <div className="min">
                            From $<span id="slider-snap-value-from"></span>
                          </div>
                          <div className="max">
                            To $<span id="slider-snap-value-to"></span>
                          </div>
                        </div>
                        <input
                          type="hidden"
                          name="pricefrom"
                          id="slider-snap-input-from"
                          value="40"
                        />
                        <input
                          type="hidden"
                          name="priceto"
                          id="slider-snap-input-to"
                          value="110"
                        />
                      </div>
                      <div className="col-xl-6 mb-4">
                        <label className="form-label">Vegetarians</label>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="vegetarians_0"
                                name="vegetarians"
                              />
                              <label
                                className="form-check-label"
                                for="vegetarians_0"
                              >
                                All
                              </label>
                            </div>
                          </li>
                          <li className="list-inline-item">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="vegetarians_1"
                                name="vegetarians"
                              />
                              <label
                                className="form-check-label"
                                for="vegetarians_1"
                              >
                                Vegetarian only
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-4">
                  <button className="btn btn-primary" type="submit">
                    {" "}
                    <i className="fas fa-filter me-1"></i>Filter{" "}
                  </button>
                </div>
                <div className="col-6 mb-4 text-end">
                  <button
                    className="btn btn-link btn-collapse ps-0 text-secondary"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#moreFilters"
                    aria-expanded="false"
                    aria-controls="moreFilters"
                    data-expanded-text="Less filters"
                    data-collapsed-text="More filters"
                  >
                    More filters
                  </button>
                </div>
              </div>
            </form> */}
            {/* <hr className="my-4" /> */}
            <div className="row">

              {places.map((place, i) => {
                return (
                  <div
                    className="col-sm-6 mb-5 hover-animate"
                    data-marker-id="59c0c8e39aa2edasd626e485d"
                  >
                    <Card1
                      key={i}
                      id={place._id}
                      name={place.name}
                      nextUrl="/detail-room"
                      title={place.title}
                      placeImg={place.placeImg}
                      profileImg={place.profileImg}
                      type={place.type}
                      price={place.price}
                      monthwise_season_factor={place.monthwise_season_factor}
                      rating={place.rating}
                    />
                  </div>
                );
              })}
            </div>
            {/* <!-- Pagination --> */}
            <LoadingButton
              onClick={handleClick}
              loading={loading}
              loadingIndicator="Loading…"
              style={{ display: loadingButton }}
            >
              Load More
            </LoadingButton>
            {loadingButton === "none" ? <p>No more properties</p> : null}
          </div>
          <div className="col-lg-6 map-side-lg px-lg-0">
            <div className="map-full shadow-right" id="categorySideMap">
              <MultipleLocationMap zoom={5} center={center} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
