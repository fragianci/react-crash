import jobsJson from "../../jobs.json";
import JobListing from "./JobListing";
import { Job } from "../models/jobs";

function JobListings({ isHome = false }: { isHome: boolean }) {
  const jobsList: any[] = jobsJson.jobs
    .map((job) => new Job(job))
    .slice(0, isHome ? 3 : undefined);
  console.log("JOBS: ", jobsList);
  return (
    <div>
      <h2 className="text-3xl font-bold text-indigo-500 mb-0 text-center">
        {isHome ? "Recent Jobs" : "Browse Jobs"}
      </h2>
      <section className="bg-blue-50 px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {jobsList.map((job: any) => {
          return <JobListing key={job.id} job={job} />;
        })}
      </section>
    </div>
  );
}

export default JobListings;
