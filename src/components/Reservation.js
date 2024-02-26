import React from "react";

import restaurantPhoto from "../icons_assets/restaurant1.jpg";

const Reservation = () => {
  return (
    <div className="res-page">
      <img
        src={restaurantPhoto}
        alt="restaurant photo"
        style={{ width: "400px" }}
      />
      <div className="res-container">
        <h2>Book a table at Little Lemon Chicago</h2>

        <form>
          <h4 className="heading-m" style={{ color: "#F4CE14" }}>
            Reservation Details
          </h4>

          <div className="res-info">
            <div>
              <label htmlFor="res-date">Choose date*</label>
              <input type="date" id="res-date" required />
            </div>

            <div>
              <label htmlFor="res-time">Choose time*</label>
              <select id="res-time" required>
                <option>17:00</option>
                <option>17:30</option>
                <option>18:00</option>
                <option>18:30</option>
                <option>19:00</option>
                <option>19:30</option>
                <option>20:00</option>
                <option>20:30</option>
                <option>21:00</option>
                <option>21:30</option>
                <option>22:00</option>
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
              <label htmlFor="res-lastname">First Name*</label>
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
