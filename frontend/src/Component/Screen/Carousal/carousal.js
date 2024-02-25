

import React, { useEffect, useState } from "react";
import "./Carousal.css";

export default function Carousal() {
  const [currImg, setCurrImg] = useState();
  const image_data = [
    {
      img: "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Fashion/GW/Feb/Citi/FDFO/22._CB582195998_.jpg",
    },
    {
      img: "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/jan24atf/unrec/citi/pc-1_2x._CB584618827_.jpg",
    },
    {
      img: "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Sports/February/GFD/GW/Herofader/Final/Unrec/5298-Sports---GFD-hero-Feb24-Adult--kids-cycles-3000._CB581619199_.jpg",
    },
  ];
  let increase = 0;

  const automaticChanger = () => {
    setCurrImg(image_data[increase].img);

    if (increase === 2) {
      increase = 0;
    } else {
      increase++;
    }
  };

  useEffect(() => {
    setCurrImg(image_data[0].img);
    const intervalId = setInterval(() => {
      automaticChanger();
    }, 3000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="carousal_main">
      <div className="carousal_img_div">
        <img src={currImg} alt="Img" className="carousal_img" />
      </div>
    </div>
  );
}
