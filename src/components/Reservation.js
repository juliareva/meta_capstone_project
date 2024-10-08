import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import restaurantPhoto from "../icons_assets/restaurant1.jpg";

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

export const initializeTimes = () => {
  return fetchAPI(new Date());
};

export const updateTimes = (targetDay) => {
  return fetchAPI(new Date(targetDay));
};

export const isFormDataValid = (formData) => {
  if (
    formData.date &&
    formData.time &&
    formData.guests > 0 &&
    formData.firstname &&
    formData.lastname &&
    formData.email &&
    formData.phone
  ) {
    return true;
  } else {
    return false;
  }
};

const Reservation = () => {
  const submitAPI = function (formData) {
    return true;
  };

  const [availTime, setAvailTime] = useState([]);
  const [currDate, setCurrDate] = useState(getDate());
  const [formData, setFormData] = useState({
    date: getDate(),
    time: "",
    guests: 1,
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isValid = isFormDataValid(formData);
    setIsFormValid(isValid);
  }, [formData]);

  function getDate() {
    const today = new Date();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const year = today.getFullYear();
    const day = today.getDate();
    return `${year}-${month}-${day}`;
  }

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setCurrDate(selectedDate);
    setAvailTime(updateTimes(selectedDate));
    setFormData({ ...formData, date: selectedDate });
  };

  useEffect(() => {
    setAvailTime(initializeTimes());
  }, []);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

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
              <label htmlFor="date">Choose date*</label>
              <input
                type="date"
                id="date"
                value={currDate}
                onChange={handleDateChange}
                required
                data-testid="date-input-testid"
              />
            </div>

            <div>
              <label htmlFor="time">Choose time*</label>
              <select
                id="time"
                required
                data-testid="time-input-testid"
                onChange={handleChange}
                value={formData.time}
              >
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
                value={formData.guests}
                required
                data-testid="guests-input-testid"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="preference">Preference</label>
              <select id="preference" onChange={handleChange}>
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
              <label htmlFor="firstname">First Name*</label>
              <input
                type="text"
                id="firstname"
                required
                data-testid="first-name-input-testid"
                value={formData.firstname}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="lastname">Last Name*</label>
              <input
                type="text"
                id="lastname"
                required
                data-testid="last-name-input-testid"
                value={formData.lastname}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="phone">Your Phone*</label>
              <input
                type="text"
                id="phone"
                required
                data-testid="phone-input-testid"
                onChange={handleChange}
                value={formData.phone}
              />
            </div>

            <div>
              {" "}
              <label htmlFor="email">Your Email*</label>
              <input
                data-testid="email-input-testid"
                type="email"
                id="email"
                required
                onChange={handleChange}
                value={formData.email}
              />
            </div>
          </div>

          <input
            type="submit"
            value="Book a table"
            className="btn_primary"
            id="bookTable"
            disabled={!isFormValid}
          />
        </form>
      </div>
    </div>
  );
};

export default Reservation;
