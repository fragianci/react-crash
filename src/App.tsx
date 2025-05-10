import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import HomeCards from "./components/HomeCards";

const me = "Francesco";
const cars = ["Toyota chr", "Tesla X", "Porche Cayenne"];
let loggedIn = true;

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero
        title="Become a React developer"
        subtitle="For the sake of it"
      ></Hero>
      <HomeCards></HomeCards>
      <h1 style={{ color: "red" }}>Ciao {me}, queste sono le tue macchine:</h1>
      <ul>
        {cars.map((car, index) => {
          return <li key={index}>{car}</li>;
        })}
      </ul>
      {loggedIn && <p>Hello member</p>}
    </div>
  );
};

export default App;
