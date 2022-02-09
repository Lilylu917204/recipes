import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Settings } from "../../common/slickSetting";
import "./Banner.scss";

const images = [
  {
    src: "https://www.edamam.com/web-img/e70/e70f47152cc70b880001f99341537fbf.jpg",
  },
  {
    src: "https://www.edamam.com/web-img/400/40091358a014e102ac7ec5bbd7366bab.jpg",
  },

  {
    src: "https://www.edamam.com/web-img/04b/04b6c3528fc1ed74714909cf4fdb7d30.jpg",
  },
];

function Banner() {
  return (
    <div className="banner">
      <Slider {...Settings}>
        {images.map((img) => {
          return (
            <>
              <div className="banner__pic">
                <div className="slide-img"></div>
                <img src={img.src} />
              </div>
            </>
          );
        })}
        {/* <div>
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
        </div> */}
      </Slider>
      <div className="banner--fadeBottom" />
    </div>
  );
}

export default Banner;
