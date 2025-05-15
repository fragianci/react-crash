import React from "react";
import HomeCards from "../components/HomeCards";
import Hero from "../components/hero";
import JobListings from "../components/JobListings";

function JobsPage() {
  return (
    <section className="bg-blue-50 px-4 py-4 ">
      <JobListings isHome={false}></JobListings>
    </section>
  );
}

export default JobsPage;
