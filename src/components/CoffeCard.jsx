import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router";

const CoffeCard = ({ coffee, coffees, setCoffees }) => {
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Good Luck!!!",
                text: "Coffee details deleted.",
                icon: "success",
              });
              // remove the deleted coffee from the coffees array - UI
              const remaining = coffees.filter((c) => c._id !== id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="flex justify-between rounded-lg border border-gray-200 bg-[#ECEAE3] p-4 transition-all duration-300 hover:shadow-lg">
      <div className="w-2/6">
        <img
          src={coffee.photo}
          alt={coffee.name}
          className="h-full w-full object-cover transition-all duration-300 hover:scale-125"
        />
      </div>
      <div className="flex w-3/6 flex-col justify-center gap-2">
        <h2 className="text-lg font-bold">{coffee.name}</h2>
        <p className="text-sm text-gray-500">
          <span className="font-semibold text-gray-900">Description:</span>{" "}
          {coffee.details}
        </p>
        <p className="text-lg font-bold text-gray-500">
          <span className="font-semibold text-gray-900">Price:</span>
          TK. {coffee.price}.00
        </p>
      </div>
      <div className="w-.5/6 flex flex-col justify-center gap-4">
        <Link to={`/coffee/${coffee._id}`}>
          <FaEye className="cursor-pointer rounded-md text-[#794c23] transition-all duration-300 hover:scale-110" />
        </Link>
        <Link to={`/update-coffee/${coffee._id}`}>
          <FaEdit className="cursor-pointer rounded-md text-sky-600 transition-all duration-300 hover:scale-110" />
        </Link>
        <FaTrash
          className="cursor-pointer rounded-md text-red-500 transition-all duration-300 hover:scale-110"
          onClick={() => handleDelete(coffee._id)}
        />
      </div>
    </div>
  );
};

export default CoffeCard;
