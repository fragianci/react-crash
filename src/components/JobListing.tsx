import React, { useState } from "react";
import jobs from "../../jobs.json";
import type { Job } from "../models/jobs";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";

function JobListing({ job }: { job: Job }) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  let description = job.description;
  if (!showFullDescription) {
    description = description.substring(0, 90) + "...";
  }
  return (
    <div className="container-xl lg:container m-auto p-4 bg-white rounded-2xl flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold text-indigo-500 mb-6">
          {/* {isHome ? "Recent Jobs" : "Browse Jobs"} */}
          {job.title}
        </h2>
        <p className="">{description}</p>
        <button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className="text-indigo-500 mb-5 hover:text-indigo-600 cursor-pointer"
        >
          {showFullDescription ? "Hide" : "Show"}
        </button>
        <p className="text-blue-500 mt-1">{job.salary}$</p>
      </div>
      <div className="flex w-full justify-between">
        <div className="text-amber-600 flex items-center">
          <FaMapMarker className="inline text-lg mr-3"></FaMapMarker>
          {job.location}
        </div>
        {/* <Link
          to={`/jobs/${job.id}`}
          className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
          Read More
        </Link> */}
        <Link
          className="bg-blue-400 text-white p-2 rounded-md hover:bg-indigo-700"
          to="/"
        >
          Read more
        </Link>
      </div>
      {/* {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}
        </div>
      )} */}
    </div>
  );
}

export default JobListing;
