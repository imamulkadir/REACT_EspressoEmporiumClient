import { Link, useLoaderData } from "react-router";
import CoffeCard from "./CoffeCard";
import { FaCoffee } from "react-icons/fa";
import { useState } from "react";

const Home = () => {
  const loadedCoffees = useLoaderData();
  // console.log(loadedCoffees);
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div className="mx-auto mt-8 max-w-7xl p-4 md:mt-0 md:p-24">
      <div className="mb-12 flex flex-col items-center justify-between gap-6">
        <p className="text-sm text-gray-500">--- Sip & Savor ---</p>
        <h1 className="font-rancho text-center text-3xl font-bold text-[#794c23] [text-shadow:0_0_3px_#351f2a] md:text-4xl">
          Our Popular Coffees
        </h1>
        <Link
          to="/add-coffee"
          className="font-rancho flex items-center gap-2 rounded-md bg-[#664221] px-4 py-2 text-xl text-white transition-all duration-300 hover:bg-[#794c23]"
        >
          <FaCoffee /> Add Coffee
        </Link>
      </div>
      {coffees.length === 0 ? (
        <p className="font-raleway w-full text-center text-lg font-medium">
          No coffees available. Please add some coffees.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {coffees.map((coffee) => (
            <CoffeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
