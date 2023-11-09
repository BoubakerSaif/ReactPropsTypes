import React from "react";
import Carousel from "react-bootstrap/Carousel";

import PropTypes from "prop-types";

const Home = ({ jungle, river, waterfall }) => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://cdn.futura-sciences.com/cdn-cgi/image/width=1024,quality=60,format=auto/sources/images/screen/NATURE/Arbres/arbrechemin-43.jpg"
            alt="First slide"
            style={{ height: "400px" }}
          />
          <Carousel.Caption>
            <h3> {jungle} </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://www.wbcsd.org/var/site/storage/images/overview/news-insights/wbcsd-insights/accelerating-business-along-the-road-to-a-nature-positive-future/225091-1-eng-GB/Accelerating-business-along-the-road-to-a-nature-positive-future_i1140.jpg"
            alt="Second slide"
            style={{ height: "400px" }}
          />
          <Carousel.Caption>
            <h3> {river} </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://c8.alamy.com/compfr/k5f2jg/cascade-de-seljalandfoss-au-coucher-du-soleil-le-pont-de-la-riviere-tres-belle-nature-de-l-islande-k5f2jg.jpg"
            alt="Third slide"
            style={{ height: "400px" }}
          />
          <Carousel.Caption>
            <h3> {waterfall} </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;

Home.propTypes = {
  jungle: PropTypes.string,
  river: PropTypes.string,
  waterfall: PropTypes.string,
};

Home.defaultProps = {
  jungle: "Unknown",
};
