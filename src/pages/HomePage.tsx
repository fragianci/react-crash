import React from "react";
import HomeCards from "../components/HomeCards";
import Hero from "../components/hero";
import JobListings from "../components/JobListings";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="pb-6">
      <Hero
        title="Become a React developer"
        subtitle="For the sake of it"
      ></Hero>
      <HomeCards />
      <JobListings isHome={true} />
      <div className="flex justify-center py-10">
        <Link
          to="/jobs-page"
          className="text-white bg-black rounded-md p-3 hover:bg-gray-900 w-64 text-center"
        >
          View all jobs
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
