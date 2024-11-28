import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const LoadedCoffees = useLoaderData();
  // console.log(Coffees);
  const [coffees, setCoffees] = useState(LoadedCoffees);

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-center text-purple-600 mt-4 mb-6">
          All Coffees {LoadedCoffees.length}
        </h1>
        {/* <p>ALL coffee {Coffees.length}</p>
        <img src={Coffees[0].photo} alt="" />
        <p>{Coffees[0].name}</p> */}
      </div>
      <div className="m-20 grid md:grid-cols-2 gap-7">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </>
  );
};

export default Home;
