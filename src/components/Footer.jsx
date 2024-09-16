//import React from "react";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Tiktok from "../assets/tiktok.png";
import Youtube from "../assets/youtube.png";
import MDL from "../assets/mdl.png";

const Footer = () => {
  return (
    <div className="flex flex-col justify-between gap-14">
      <main></main>
      <footer className="bg-deep-navy-blue w-full p-8">
        <div className="flex justify-center gap-10">
          <img src={Facebook} alt="Facebook" />
          <img src={Instagram} alt="Facebook" />
          <img src={Tiktok} alt="Facebook" />
          <img src={Youtube} alt="Facebook" />
        </div>
        <div className="text-center text-white mx-52 my-5">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
            nemo nesciunt, quidem aliquid ullam sunt fugit officia repudiandae
            assumenda. Voluptate, ducimus. Corrupti ad numquam autem, quibusdam
            sapiente voluptate pariatur impedit!
          </p>
        </div>
        <div className="flex justify-center my-7">
          <img className="w-1/12" src={MDL} alt="MDL Logo" />
        </div>
        <div className="text-center text-white">
          <p>&copy; 2024 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
