import { RiCupFill } from "react-icons/ri";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  console.log(coffee);
  const navigate = useNavigate();
  const handleUpdateCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData);
    console.log(updatedCoffee);
    fetch(`http://localhost:3000/coffees/${coffee._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Data updated successfully",
            icon: "success",
            draggable: true,
          });
          navigate("/");
        }
      });
  };
  return (
    <div className="min-h-screen p-24">
      <form onSubmit={handleUpdateCoffee}>
        <div className="mt-6 grid grid-cols-1 gap-4 lg:px-16">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Enter coffee name"
                defaultValue={coffee.name}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="chef">Quantity</label>
              <input
                type="number"
                name="quantity"
                className="input w-full"
                placeholder="Enter quantity"
                defaultValue={coffee.quantity}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="supplier">Supplier</label>
              <input
                type="text"
                name="supplier"
                className="input w-full"
                placeholder="Enter supplier's name"
                defaultValue={coffee.supplier}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="taste">Taste</label>
              <input
                type="text"
                name="taste"
                className="input w-full"
                placeholder="Enter taste"
                defaultValue={coffee.taste}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                name="price"
                className="input w-full"
                placeholder="Enter price per cup"
                defaultValue={coffee.price}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="details">Details</label>
              <input
                type="text"
                name="details"
                className="input w-full"
                placeholder="Enter details"
                defaultValue={coffee.details}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="photo">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input w-full"
              placeholder="Enter photo URL"
              defaultValue={coffee.photo}
            />
          </div>
          <button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-[#D2B48C] py-2 font-semibold text-black hover:border hover:border-black hover:bg-black hover:text-white">
            <RiCupFill /> Update Coffee
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
