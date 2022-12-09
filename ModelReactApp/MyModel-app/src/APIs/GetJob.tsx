import { useQuery } from "react-query";
import { request } from "../Utilities";

const fetchJobs = async () => {
  const response = await request({ url: "jobs", method: "get" });
  if (response.status === 304) {
    throw new Error("There was an error fetching the job");
  }
  return response;
};

const GetJobList = () => {
  return useQuery("jobsKey", fetchJobs, {
    refetchOnWindowFocus: false,
  });
};

export default GetJobList;