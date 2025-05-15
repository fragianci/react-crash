import { useEffect, useState } from "react";
import { Job } from "../models/jobs";
import { useParams } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import Spinner from "../components/Spinner";

function JobPage() {
  const { id } = useParams();
  const [job, setJob] = useState<null | Job>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:8000/jobs/${id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("DATA: ", data);
          setJob(data);
          setLoading(false);
        });
    }, 500);

    // const fetchJobs = async () => {
    //   try {
    //     const res = await fetch("http://localhost:8000/jobs");
    //     const data: Job[] = await res.json();
    //     const dataMapped = data.map((job) => new Job(job));
    //     console.log(dataMapped);

    //     setJob(dataMapped);
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    // fetchJobs();
  }, []);

  return <>Job page {loading ? <Spinner loading={loading} /> : job?.title}</>;
}

export default JobPage;
