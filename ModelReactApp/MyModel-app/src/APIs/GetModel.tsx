import { useQuery } from "react-query";
import { request } from "../Utilities";

const fetchAllModelsFromJobs = async () => 
{
  const response = await request({ url: "models", method: "get" });
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
