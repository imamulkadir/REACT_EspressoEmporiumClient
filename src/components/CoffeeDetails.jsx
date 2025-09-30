import { useLoaderData } from "react-router";
import addCoffeeBg from "../assets/addCoffeeBg.png";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  console.log(coffee);
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col gap-8 rounded-xl bg-[#F4F3F0] px-24 py-12"
      style={{ backgroundImage: `url(${addCoffeeBg})` }}
    >
      <button
        onClick={() => navigate("/")}
        className="font-rancho flex items-center gap-4 text-2xl font-semibold text-slate-800 transition-all duration-300 hover:text-slate-950"
      >
        <FaArrowLeft className="text-xl" />
        Back to Home
      </button>
      <div className="flex items-center justify-center gap-12 rounded-md bg-[#f4f3f0] p-12">
        <div className="">
          <img
            src={coffee.photo}
            alt={coffee.name}
            className="w-62 rounded-md object-cover object-center transition-all duration-300 hover:scale-135"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-rancho text-2xl font-bold text-[#794c23] [text-shadow:0_0_3px_#351f2a]">
            {coffee.name}
          </h1>
          <p className="text-gray-500">
            <span className="font-semibold">Description: </span>
            {coffee.details}
          </p>
          <p className="text-gray-500">
            <span className="font-semibold">Price:</span> {coffee.price}
          </p>
          <p className="text-gray-500">
            <span className="font-semibold">Taste:</span> {coffee.taste}
          </p>
          <p className="text-gray-500">
            <span className="font-semibold">Supplier:</span> {coffee.supplier}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
