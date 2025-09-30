import heroBg from "../assets/heroBg.png";
import imgOne from "../assets/1.png";
import imgTwo from "../assets/2.png";
import imgThree from "../assets/3.png";
import imgFour from "../assets/4.png";

const Hero = () => {
  return (
    <div className="flex min-h-[70vh] flex-col gap-4">
      <div
        className="flex min-h-[90vh] items-center justify-start gap-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="hidden w-1/2 md:block">&nbsp;</div>
        <div className="flex w-full flex-col items-center justify-center gap-8 px-4 text-center md:w-1/2 md:items-start md:px-0 md:text-left">
          <h1 className="font-rancho text-5xl text-white">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="font-raleway text-md max-w-2xl text-gray-300">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="w-fit rounded-md bg-[#664221] px-4 py-2 text-white hover:bg-[#794c23]">
            Get Started
          </button>
        </div>
      </div>
      <div className="-mt-4 bg-[#ECEAE3] py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 place-items-center gap-8 px-4 md:grid-cols-4 md:gap-4 md:px-0">
          <div className="flex flex-col items-center gap-2">
            <img src={imgOne} alt="imgOne" className="h-15 w-15" />
            <h2 className="font-rancho text-2xl">Awesome Aroma</h2>
            <p className="font-raleway text-gray-750 px-4 text-center text-sm">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img src={imgTwo} alt="imgTwo" className="h-15 w-15" />
            <h2 className="font-rancho text-2xl">High Quality</h2>
            <p className="font-raleway text-gray-750 px-4 text-center text-sm">
              We served the coffee to you maintaining the best quality
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img src={imgThree} alt="imgThree" className="h-15 w-15" />
            <h2 className="font-rancho text-2xl">Proper Roasting</h2>
            <p className="font-raleway text-gray-750 px-4 text-center text-sm">
              The coffee is made of the green coffee beans which you will love
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img src={imgFour} alt="imgFour" className="h-15 w-15" />
            <h2 className="font-rancho text-2xl">Pure Grades</h2>
            <p className="font-raleway text-gray-750 px-4 text-center text-sm">
              Your coffee is brewed by first roasting the green coffee beans
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
