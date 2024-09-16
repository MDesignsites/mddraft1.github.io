import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Marmoset from '../assets/Marmoset.png';
import Peafowl from '../assets/Peafowlres.png';

const HeroImage = [
  Marmoset, Peafowl
];

const Hero = () => {
  return (
    <div className="bg-hero-section bg-no-repeat bg-cover bg-bottom bg-black py-20">
      <div className="bg-hero-gradient relative">
        <Fade>
          {HeroImage.map((image, index) => (
            <div key={index} className="flex align-middle justify-center bg-cover h-96" style={{height: "600px"}}>
              <div
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "100%",
                }}
              ></div>
            </div>
          ))}
        </Fade>
        <h1 className="text-white text-6xl font-semibold uppercase font-Oswald absolute bottom-10 left-10 z-10">
          <span className="block">Quality Breeding</span>
          <span className="block">Makes the Difference.</span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
