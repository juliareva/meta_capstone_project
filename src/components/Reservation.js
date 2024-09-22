import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import restaurantPhoto from "../icons_assets/restaurant1.jpg";

const Reservation = () => {
  const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() < 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
  };

  const submitAPI = function (formData) {
    return true;
  };

  // CHECKING AVAILABLE TIME FOR SELECTED DATE
  const [availTime, setAvailTime] = useState([]);
  const [currDate, setCurrDate] = useState(getDate());
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  function getDate() {
    const today = new Date();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const year = today.getFullYear();
    const day = today.getDate();
    return `${year}-${month}-${day}`;
  }

  const handleDateChange = (event) => {
    setCurrDate(event.target.value);
    setAvailTime(fetchAPI(new Date(event.target.value)));
  };

  useEffect(() => {
    setAvailTime(fetchAPI(new Date()));
  }, []);

  // SUBMITTING FORM
  const handleSubmit = (event) => {
    event.preventDefault();
    if (submitAPI(formData)) {
      navigate("/booking_confirmed");
    }
  };

  return (
    <div className="res-page">
      <img
        src={restaurantPhoto}
        alt="restaurant photo"
        style={{ width: "400px" }}
      />
      <div className="res-container">
        <h2>Book a table at Little Lemon Chicago</h2>

        <form onSubmit={handleSubmit}>
          <h4 className="heading-m" style={{ color: "#F4CE14" }}>
            Reservation Details
          </h4>

          <div className="res-info">
            <div>
              <label htmlFor="res-date">Choose date*</label>
              <input
                type="date"
                id="res-date"
                value={currDate}
                onChange={handleDateChange}
                required
              />
            </div>

            <div>
              <label htmlFor="res-time">Choose time*</label>
              <select id="res-time" required>
                {availTime.map((time) => {
                  return <option>{time}</option>;
                })}
              </select>
            </div>

            <div>
              <label htmlFor="guests">Number of guests*</label>
              <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                required
              />
            </div>

            <div>
              <label htmlFor="preference">Preference</label>
              <select id="preference">
                <option>Inside</option>
                <option>Outside</option>
              </select>
            </div>
          </div>

          <h4 className="heading-m" style={{ color: "#F4CE14" }}>
            Guest’s Details
          </h4>
          <div className="guest-info">
            <div>
              <label htmlFor="res-firstname">First Name*</label>
              <input type="text" id="res-firstname" required />
            </div>

            <div>
              <label htmlFor="res-lastname">Last Name*</label>
              <input type="text" id="res-lastname" required />
            </div>

            <div>
              <label htmlFor="res-phone">Your Phone*</label>
              <input type="text" id="res-name" required />
            </div>

            <div>
              {" "}
              <label htmlFor="res-email">Your Email*</label>
              <input type="email" id="res-name" required />
            </div>
          </div>

          <input
            type="submit"
            value="Book a table"
            className="btn_primary"
            id="bookTable"
          />
        </form>
      </div>
    </div>
  );
};

export default Reservation;
