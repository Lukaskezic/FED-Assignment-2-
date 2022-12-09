import { useQuery } from "react-query";
import { MakeRequest } from "./Utilities";
import React from "react";
const fetchAllModelsFromJobs = async () => 
{
  const response = await MakeRequest({ url: "models", method: "get" });
  if (response.status === 304) 
  {
    throw new Error("There was a problem fetching the data");
  }
  return response;
};


const GetModelsList = () => 
{
  return useQuery("modelsKey", fetchAllModelsFromJobs, 
  {
    refetchOnWindowFocus: false,
  });
};

export default GetModelsList;
