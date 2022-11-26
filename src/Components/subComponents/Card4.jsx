import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { fetchSingleHome } from "../../Redux";
import { places } from "../../shared/data";
import Rating from "./Rating";

function Card4() {
  const params = new URLSearchParams(window.location.search);
  const title = params.get("title");

  const homeData = useSelector((state) => state.homes);
  const place = useSelector((state) => state.homes.home);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleHome(title));
  }, []);

  // const place = places.find((e) => {
  //   return e.title === title;
  // });

  const numberFormat = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(value);

  ////////////////////////  GETTING ALL THE PARAMS   //////////////////////////////
  const checkIn = new Date(params.get("checkIn"));
  const checkOut = new Date(params.get("checkOut"));
  const guest = params.get("guest");

  const numOfNights = Math.floor((checkOut - checkIn) / (1000 * 60 * 60 * 24));

  const weekdayArray = [1, 2, 3, 4];
  const weekendArray = [0, 5, 6];

  function countCertainDays(days, d0, d1) {
    var ndays = Math.round((d1 - d0) / (24 * 3600 * 1000));
    var sum = function (a, b) {
      return a + Math.floor((ndays + ((d0.getDay() + 6 - b) % 7)) / 7);
    };
    return days.reduce(sum, 0);
  }

  const nweekends = countCertainDays(weekendArray, checkIn, checkOut);
  const nweekdays = countCertainDays(weekdayArray, checkIn, checkOut);

  const subTotalPrice =
    place.price *
    (nweekdays * place.weekday_price + nweekends * place.weekend_price);

  const price = subTotalPrice / (nweekdays + nweekends);

  

  var totalPrice = Math.round(
    place.price *
      place.monthwise_season_factor *
      (nweekdays * place.weekday_price + nweekends * place.weekend_price)
  );



  if (numOfNights > 30) {
    totalPrice = totalPrice * place.monthly_discount;
  } else if (numOfNights > 7) {
    totalPrice = totalPrice * place.weekly_discount;
  }

  const serviceFee = totalPrice - subTotalPrice;

  var discount = 0;
  
  // const subTotalPrice = place.price * numOfNights;
  // const totalPrice = subTotalPrice + subTotalPrice * 0.062542;

  let tempDate = new Date(checkIn);
  let noOfWeekends = 0;

  while (tempDate < checkOut) {
    if (
      tempDate.getDay() === 0 ||
      tempDate.getDay() === 5 ||
      tempDate.getDay() === 6
    ) {
      noOfWeekends += 1;
      tempDate.setDate(tempDate.getDate() + 1);
    } else {
      tempDate.setDate(tempDate.getDate() + 1);
    }
  }

  let weekDays = numOfNights - noOfWeekends;

  return homeData.loading ? (
    <h1>Loading</h1>
  ) : homeData.error ? (
    <h1>Error</h1>
  ) : (
    <div className="col-lg-5 ps-xl-5">
      <div className="card border-0 shadow">
        <div className="card-body p-4">
          <div className="text-block pb-3">
            <div className="d-flex align-items-center">
              <div>
                <h6>
                  {" "}
                  <a className="text-reset" href="/detail-room">
                    {place.title}
                  </a>
                </h6>
                <p className="text-muted text-sm mb-0">
                  {place.type} in {place.location}
                </p>
                <div className="mt-n1">
                  <Rating
                    rating={place.rating}
                    class1="fa fa-xs fa-star text-primary"
                    class2="fa fa-xs fa-star text-gray-200"
                  />
                </div>
              </div>
              <a className="flex-shrink-0" href="/detail-rooms">
                <img
                  className="ms-3 rounded"
                  src={place.placeImg}
                  alt=""
                  width="100"
                />
              </a>
            </div>
          </div>
          <div className="text-block py-3">
            <ul className="list-unstyled mb-0">
              <li className="mb-3">
                <i className="fas fa-users fa-fw text-muted me-2"></i>
                {guest} guests
              </li>
              <li className="mb-0">
                <i className="far fa-calendar fa-fw text-muted me-2"></i>
                {checkIn.toLocaleString("default", { month: "short" })}{" "}
                {checkIn.getDate()}, {checkIn.getFullYear()}{" "}
                <i className="fas fa-arrow-right fa-fw text-muted mx-3"></i>
                {checkOut.toLocaleString("default", { month: "short" })}{" "}
                {checkOut.getDate()}, {checkOut.getFullYear()}
              </li>
            </ul>
          </div>
          <div className="text-block pt-3 pb-0">
            <table className="w-100">
              <tbody>
                <tr>
                  <th className="fw-normal py-2">
                    {numberFormat(price)} x {numOfNights} night
                  </th>
                  <td className="text-end py-2">
                    {numberFormat(subTotalPrice)}
                  </td>
                </tr>
                <tr>
                  <th className="fw-normal pt-2 pb-3">Service fee</th>
                  <td className="text-end pt-2 pb-3">
                    {numberFormat(serviceFee)}
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="border-top">
                  <th className="pt-3">Total</th>
                  <td className="fw-bold text-end pt-3">
                    {numberFormat(totalPrice)}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <div className="card-footer bg-primary-light py-4 border-0">
          <div className="d-flex align-items-center">
            <div>
              <h6 className="text-primary">Flexible – free cancellation</h6>
              <p className="text-sm text-primary opacity-8 mb-0">
                Cancel within 48 hours of booking to get a full refund.{" "}
                <Link to="#" className="text-reset ms-3">
                  More details
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card4;
