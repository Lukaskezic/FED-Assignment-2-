import { useQuery } from "react-query";
import { MakeRequest } from "./Utilities";
import React from "react";

const fetchJobs = async () => {
  const response = await MakeRequest({ url: "jobs", method: "get" });
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