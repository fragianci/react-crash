import JobListing from "./JobListing";
import { Job } from "../models/jobs";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

function JobListings({
  isHome = false,
  onLoading,
}: {
  isHome: boolean;
  onLoading: (load: boolean) => void;
}) {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:8000/jobs`)
        .then((res) => res.json())
        .then((data) => {
          console.log("DATA: ", data);
          setJobs(data);
          setLoading(false);
          onLoading(false);
        });
    }, 2000);
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold text-indigo-500 mb-0 text-center">
        {isHome ? "Recent Jobs" : "Browse Jobs"}
      </h2>

      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <section className="bg-blue-50 px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {jobs.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}
        </section>
      )}
    </div>
  );
}

export default JobListings;
