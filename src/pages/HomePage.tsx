import React, { useState } from "react";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import { Link } from "react-router-dom";
import Hero from "../components/hero";

function HomePage() {
  const [jobsLoaded, setJobsLoaded] = useState(true);

  const jobsLoadEvent = (loading: boolean) => {
    console.log("jobs looaded, ", loading);
    setJobsLoaded(loading);
  };

  return (
    <div className="pb-6">
      <Hero
        title="Become a React developer"
        subtitle="For the sake of it"
      ></Hero>
      <HomeCards />
      <JobListings isHome={true} onLoading={jobsLoadEvent} />
      {!jobsLoaded && (
        <div className="flex justify-center py-10">
          <Link
            to="/jobs-page"
            className="text-white bg-black rounded-md p-3 hover:bg-gray-900 w-64 text-center"
          >
            View all jobs
          </Link>
        </div>
      )}
    </div>
  );
}

export default HomePage;
