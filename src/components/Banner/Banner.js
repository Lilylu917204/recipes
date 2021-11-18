import React from "react";
import Slider from "react-slick";
import { Settings } from "../../common/slickSetting";
import "./Banner.scss";

function Banner() {
  return (
    <div className="banner">
      <Slider {...Settings}>
        <div>
          <img src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" />
        </div>
      </Slider>
    </div>
  );
}

export default Banner;