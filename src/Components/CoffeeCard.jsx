import React from "react";
import { data, NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleDelete = (_id) => {
    console.log(_id);

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
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remainCoffee = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remainCoffee);
            }
          });
      }
    });
  };
  return (
    <>
      <div className="card card-side bg-[#F5F4F1] shadow-xl">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="flex w-full justify-between items-center">
          <div>
            <h2 className="card-title">{name}</h2>
            <p>{quantity}</p>
            <p>{supplier}</p>
            <p>{taste}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="join join-vertical space-y-4">
              <button className="btn join-item btn-primary">View</button>
              <NavLink
                to={`updateCoffee/${_id}`}
                className="btn join-item btn-success "
              >
                Edit
              </NavLink>
              <button
                onClick={() => handleDelete(_id)}
                className="btn join-item btn-warning"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoffeeCard;
