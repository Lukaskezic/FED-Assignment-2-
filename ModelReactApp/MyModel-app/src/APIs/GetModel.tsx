import { useQuery } from "react-query";
import React from "react";
import { MakeRequest } from "./Utilities";
const fetchModelsFromJobs = async () => 
{
  const response = await MakeRequest(
  { 
    url: "models", method: "get" 
  });

  if (response.status === 600) 
  {
    throw new Error("Problem occured during fetch");
  }
  return response;
};


const GetModelsList = () => 
{
  return useQuery("ModelKey", fetchModelsFromJobs, 
  {
    refetchOnWindowFocus: false,
  });
};

export default GetModelsList;
