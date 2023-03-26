import React from "react";
import GreetingImg from "../../Images/Palz-Standing.png";

export default function Home() {
  return (
    <>
      <div className="intro-container">
        <div className="intro-img">
          <img src={GreetingImg} className="greeting-img" alt="" />
        </div>
        <div className="intro-text"></div>
      </div>
    </>
  );
}
