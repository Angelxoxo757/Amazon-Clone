import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Nzg3NzIxZDct/Nzg3NzIxZDct-OTgzNWJkZmYt-w1500._CB412095319_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="75605503333"
            title="New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 512GB SSD Storage) - Space Gray (Latest Model)"
            price={1399.0}
            image={`https://m.media-amazon.com/images/I/71an9eiBxpL._AC_SX425_.jpg`}
            rating={5}
          />
          <Product
            id="66757666006"
            title="Apple AirPods with Wireless Charging Case"
            price={159.88}
            image={`https://images-na.ssl-images-amazon.com/images/I/710rzW2RGcL._AC_SX425_.jpg`}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="432424042023"
            title="GODIVA Chocolatier Chocolate Gold Gift Box, Assorted, 19 Count"
            price={29.88}
            image={`https://images-na.ssl-images-amazon.com/images/I/619x4qh5MzL._SX522_.jpg`}
            rating={5}
          />
          <Product
            id="809700800"
            title="New Apple iPad Air (10.9-inch, Wi-Fi + Cellular, 64GB) - Green (Latest Model, 4th Generation)"
            price={719.98}
            image={`https://images-na.ssl-images-amazon.com/images/I/71gvhrDMIFL._AC_SX425_.jpg`}
            rating={5}
          />
          <Product
            id="3223253434"
            title="Apple Pencil (2nd generation)"
            price={129.0}
            image={`https://images-na.ssl-images-amazon.com/images/I/41S3MKU9TjL._AC_SX425_.jpg`}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="34934439454"
            title="Ring Video Doorbell – newest generation, 2020 release – 1080p HD video, improved motion detection, easy installation – Venetian Bronze."
            price={99.99}
            image={`https://images-na.ssl-images-amazon.com/images/I/61J3pXMwXJL._SX425_.jpg`}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
