import React from "react";
import restaurantfood from "../icons_assets/restauranfood.jpg";
import greekSalad from "../icons_assets/greek salad.jpg";
import bruchetta from "../icons_assets/bruschetta.jpg";
import pasta from "../icons_assets/pasta.jpg";

import photo1 from "../icons_assets/photo1.jpg";
import photo2 from "../icons_assets/photo2.jpg";
import photo3 from "../icons_assets/photo3.jpg";
import photo4 from "../icons_assets/photo4.jpg";

import founders from "../icons_assets/Mario and Adrian A.jpg";

const Main = () => {
  const specialsItems = [
    {
      id: 12345678,
      name: "Greek Salad",
      img: greekSalad,
      price: "$10.99",
      description:
        "Crisp cucumbers, juicy tomatoes, feta cheese, olives, and red onions with a zesty olive oil dressing—a taste of the Mediterranean.",
    },
    {
      id: 23456789,
      name: "Bruchetta",
      img: bruchetta,
      price: "$8.99",
      description:
        "Toasted bread topped with fresh tomatoes, garlic, basil, and olive oil—a delightful Italian appetizer.",
    },
    {
      id: 34567890,
      name: "Pasta",
      img: pasta,
      price: "$12.99",
      description:
        "Al dente pasta in a rich tomato and herb sauce, topped with Parmesan cheese—a classic Italian comfort dish.",
    },
  ];

  const reviews = [
    {
      id: 9876543210,
      name: "John Doe",
      image: photo1,
      rating: 4,
      reviewText:
        "Absolutely loved the Greek Salad! The freshness of the ingredients and the delightful combination of flavors made it a memorable dining experience.",
    },
    {
      id: 1234567890,
      name: "Alice Smith",
      image: photo2,
      rating: 5,
      reviewText:
        "The Bruschetta was a perfect start to the meal, bursting with vibrant colors and rich flavors. A must-try for any food enthusiast!",
    },
    {
      id: 5432109876,
      name: "Emily Jones",
      image: photo3,
      rating: 4,
      reviewText:
        "The Pasta was good, but I expected a bit more in terms of the sauce. Overall, a decent dish with a cozy ambiance.",
    },
    {
      id: 1357924680,
      name: "Daniel Brown",
      image: photo4,
      rating: 5,
      reviewText:
        "Outstanding experience! The Greek Salad was a refreshing delight, and the attentive staff made the dining experience truly exceptional.",
    },
  ];

  return (
    <>
      <div className="main-container">
        {/* HEADER */}
        <div className="hero">
          <div className="hero-description">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <span className="body-m" style={{ color: "#495E57" }}>
              Welcome to Little Lemon, where culinary delights meet cozy
              ambiance. Indulge in a journey of exquisite flavors crafted with
              passion, and savor memorable moments in every bite. Embrace a
              unique blend of creativity and tradition at Little Lemon, where
              our culinary artisans are dedicated to delivering an excellent
              dining experience.
            </span>
            <button className="btn_primary">
              <a href="/booking" id="reserve-button">
                Reserve a table
              </a>
            </button>
          </div>
          <div className="hero-img">
            <img
              src={restaurantfood}
              alt="restaurant photo"
              style={{ width: "300px" }}
            />
          </div>
        </div>

        {/* SPECIALS */}
        <div className="specials">
          <div className="specials-heading">
            <h2>Specials</h2>
            <button className="btn_secondary">Online Menu</button>
          </div>
          <div className="specials-cards">
            {specialsItems.map((item) => (
              <div key={item.id} className="special-card">
                <div className="special-card-img">
                  <img src={item.img} alt={item.name} id="special-img" />
                </div>

                <div className="special-card-content">
                  <div className="card-name-price">
                    <h4 className="heading-m">{item.name}</h4>
                    <h4 className="heading-m">{item.price}</h4>
                  </div>
                  <span className="body-s">{item.description}</span>
                </div>
                <button className="btn_secondary order_delivery">
                  Order delivery
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* TESTIMONIALS */}
        <div className="testimonials">
          <div className="testimonials-container">
            <h2 style={{ color: "#FFF" }}>Reviews</h2>
            <div className="testimonials-card-container">
              {reviews.map((review) => (
                <div key={review.id} className="testimonials-card">
                  <div className="testimonials-card-header">
                    <img
                      src={review.image}
                      alt={review.name}
                      style={{ width: "100px" }}
                    />
                    <h4 className="body-m">{review.name}</h4>
                  </div>
                  <div className="testimonials-card-body">
                    <div className="rating">
                      {Array(review.rating)
                        .fill()
                        .map(() => (
                          <span className="star body-s">&#9733;</span>
                        ))}
                    </div>

                    <div className="body-s review-text">
                      {review.reviewText}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ABOUT */}
        <div className="about" id="about">
          <div className="about-description">
            <h2>Little Lemon - Chicago</h2>
            <span className="body-m" style={{ color: "#495E57" }}>
              Welcome to Little Lemon, where every sip tells a story! Founded
              with a zest for bringing joy and refreshment to life, our journey
              began in a quaint kitchen with a simple idea – to create beverages
              that embody the essence of pure, sun-kissed lemons. With a
              commitment to quality and a dash of creativity, Little Lemon has
              evolved into a cherished brand, crafting beverages that not only
              quench your thirst but also transport you to the sun-drenched
              orchards where our journey first began. From our roots to your
              glass, join us in savoring the citrusy delight that is Little
              Lemon – a sip of sunshine in every drop.
            </span>
          </div>
          <div className="about-photos">
            <img
              src={founders}
              alt="Mario and Adrian"
              style={{ width: "400px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
