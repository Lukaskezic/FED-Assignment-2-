import { useQuery } from "react-query";
import { MakeRequest } from "./Utilities";
const fetchModelsFromJobs = async () => 
{
  const response = await MakeRequest(
  { 
    url: "Models", method: "Get" 
  });

  if (response.status === 304) 
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
