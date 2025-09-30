import cupImg1 from "../assets/cup1.png";
import cupImg2 from "../assets/cup2.png";
import cupImg3 from "../assets/cup3.png";
import cupImg4 from "../assets/cup4.png";
import cupImg5 from "../assets/cup5.png";
import cupImg6 from "../assets/cup6.png";
import cupImg7 from "../assets/cup7.png";
import cupImg8 from "../assets/cup8.png";

const FollowUs = () => {
  const imgClass =
    "h-full w-full object-cover transition-all duration-300 hover:scale-105";
  return (
    <div className="mx-auto max-w-7xl p-4 md:px-24 md:pb-24">
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-md text-gray-500">Get in touch</p>
        <h1 className="font-rancho text-3xl font-bold text-[#794c23] [text-shadow:0_0_3px_#351f2a] md:text-4xl">
          Follow us on Instagram
        </h1>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        <img src={cupImg1} alt="cupImg1" className={imgClass} />
        <img src={cupImg2} alt="cupImg2" className={imgClass} />
        <img src={cupImg3} alt="cupImg3" className={imgClass} />
        <img src={cupImg4} alt="cupImg4" className={imgClass} />
        <img src={cupImg5} alt="cupImg5" className={imgClass} />
        <img src={cupImg6} alt="cupImg6" className={imgClass} />
        <img src={cupImg7} alt="cupImg7" className={imgClass} />
        <img src={cupImg8} alt="cupImg8" className={imgClass} />
      </div>
    </div>
  );
};

export default FollowUs;
