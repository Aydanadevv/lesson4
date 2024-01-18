import React from "react";
import image15 from "../images/Rectangle 15.png";
import image16 from "../images/Rectangle 16.png";
import image17 from "../images/Rectangle 17.png";
import image18 from "../images/Rectangle 18.png";
import image19 from "../images/Rectangle 19.png";
import image20 from "../images/Rectangle 20.png";

const Sections = () => {
  return (
    <div id="image">
      <div className="container">
        <div className="image">
          <img src={image15} alt="" />
          <div className="image_block">
            <img src={image16} alt="" />
            <div className="image_main">
              <div className="divImage1">
                <img src={image17} alt="" />
                <img src={image19} alt="" />
              </div>

              <div className="divImage2">
                <img src={image18} alt="" />
                <img src={image20} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sections;
