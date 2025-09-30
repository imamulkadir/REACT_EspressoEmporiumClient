import { useLoaderData } from "react-router";
import { FaEdit, FaEye } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import Swal from "sweetalert2";

const Users = () => {
  const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers);
  console.log(initialUsers);

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
        fetch(`http://localhost:3000/users/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainingUsers = users.filter((user) => user._id !== id);
              setUsers(remainingUsers);

              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted successfully.",
                icon: "success",
              });
            } else {
              Swal.fire({
                title: "Failed!",
                text: "User has not been deleted successfully.",
                icon: "error",
              });
            }
          });
      }
    });
  };

  return (
    <div className="my-12 flex flex-col gap-4">
      <h1 className="font-rancho text-center text-4xl font-bold text-[#794c23] [text-shadow:0_0_3px_#351f2a]">
        Total Users: {users.length}
      </h1>
      <div className="rounded-md bg-[#f4f3f0] p-12">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={user.photoURL}
                            className="h-full w-full object-contain object-center"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.address}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">
                      <FaEye />
                    </button>
                    <button className="btn btn-ghost btn-xs">
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn btn-ghost btn-xs"
                    >
                      <FaTrash />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
