import { RiCupFill } from "react-icons/ri";
import Swal from "sweetalert2";
import addCoffeeBg from "../assets/addCoffeeBg.png";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { useContext, useEffect } from "react";

const AddCoffee = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/");
      Swal.fire({
        title: "Please sign in to add a coffee",
        icon: "warning",
        showConfirmButton: false,
        timer: 2500,
      });
    }
  }, [user, navigate]);

  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const coffeeData = Object.fromEntries(formData.entries());

    console.log(coffeeData);
    // Send data to the server
    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(coffeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId !== null) {
          Swal.fire({
            title: "Coffee added successfully",
            icon: "success",
            draggable: true,
            // timer: 1500,
          });
          form.reset();
        } else {
          Swal.fire({
            title: "Failed to add coffee",
            icon: "error",
            draggable: true,
            // timer: 1500,
          });
        }
      });
  };

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
      <div className="rounded-md bg-[#f4f3f0] p-12">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="font-rancho text-4xl font-bold text-[#794c23] [text-shadow:0_0_3px_#351f2a]">
            Add New Coffee
          </h1>
          <p className="max-w-2xl text-center text-gray-500">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form onSubmit={handleAddCoffee}>
          <div className="mt-6 grid grid-cols-1 gap-4 lg:px-16">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="input w-full"
                  placeholder="Enter coffee name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="chef" className="font-semibold">
                  Quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  className="input w-full"
                  placeholder="Enter quantity"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="supplier" className="font-semibold">
                  Supplier
                </label>
                <input
                  type="text"
                  name="supplier"
                  className="input w-full"
                  placeholder="Enter supplier's name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="taste" className="font-semibold">
                  Taste
                </label>
                <input
                  type="text"
                  name="taste"
                  className="input w-full"
                  placeholder="Enter taste"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="price" className="font-semibold">
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  className="input w-full"
                  placeholder="Enter price per cup"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="details" className="font-semibold">
                  Details
                </label>
                <input
                  type="text"
                  name="details"
                  className="input w-full"
                  placeholder="Enter details"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="photo" className="font-semibold">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                className="input w-full"
                placeholder="Enter photo URL"
              />
            </div>
            <button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-[#D2B48C] py-2 font-semibold text-black hover:border hover:border-black hover:bg-black hover:text-white">
              <RiCupFill /> Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
