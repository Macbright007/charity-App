import React from "react";
import { BannerWrapper } from "./bannerStyles";

const Banner = () => {
  return (
    <BannerWrapper>
      <div className="genLayout bannerContainer">
        <div className="bannerContent">
          <h1>giving is the only true acquistion, we get only as we give.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
            deleniti blanditiis iure suscipit fugiat, quia doloribus quo
            incidunt tempore labore!
          </p>
          <button>get started</button>
        </div>
        <div className="bannerImg">
          <img src="" alt="guy with box" />
        </div>
      </div>
    </BannerWrapper>
  );
};

export default Banner;
