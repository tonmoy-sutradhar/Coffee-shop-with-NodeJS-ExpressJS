import React from "react";
import Swal from "sweetalert2";
const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);

    // Send to the data
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("NEW COFFEE Data --", data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Coffee added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <>
      <div className="bg-[#F4F3F0] p-20">
        <h1 className="text-center text-2xl font-bold mt-3 mb-6">ADD Coffee</h1>

        <form onSubmit={handleAddCoffee}>
          {/* Coffee name & quantity row */}
          <div className="md:flex  max-w-5xl mx-auto gap-3 justify-center">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text font-bold">Coffee Name</span>
              </div>
              <input
                type="text"
                name="name"
                placeholder="Enter Coffee Name"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text font-bold">Coffee Quantity</span>
              </div>
              <input
                type="text"
                name="quantity"
                placeholder="Enter Coffee quantity"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>

          {/* Coffee Supplier & test row */}
          <div className="md:flex  max-w-5xl mx-auto gap-3 justify-center">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text font-bold">Supplier</span>
              </div>
              <input
                type="text"
                name="supplier"
                placeholder="Enter Coffee Supplier"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text font-bold">Taste</span>
              </div>
              <input
                type="text"
                name="taste"
                placeholder="Enter Coffee taste"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>

          {/* Coffee category & Details row */}
          <div className="md:flex  max-w-5xl mx-auto gap-3 justify-center">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text font-bold">Category</span>
              </div>
              <input
                type="text"
                name="category"
                placeholder="Enter Coffee category"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text font-bold">Details</span>
              </div>
              <input
                type="text"
                name="details"
                placeholder="Enter Coffee details"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>

          {/* Coffee Photo Url row */}
          <div className="md:w-[656px]  mx-auto gap-3 justify-center">
            <label className="form-control w-full  ">
              <div className="label">
                <span className="label-text font-bold">Photo</span>
              </div>
              <input
                type="text"
                name="photo"
                placeholder="Enter photo url"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="text-center mt-4">
            <input type="submit" value="Submit" className="btn btn-success" />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddCoffee;
