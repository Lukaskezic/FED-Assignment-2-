import { useQuery } from "react-query";
import { MakeRequest } from "./Utilities";

const FetchAJobs = async () => 
{
  const response = await MakeRequest(
    { 
      url: "Jobs", method: "Get" 
    });
  
    if (response.status === 304) 
  {
    throw new Error("Error");
  }
  return response;
};

const GetJobList = () => 
{
  return useQuery("JobKey", FetchAJobs, 
  {
    refetchOnWindowFocus: false,
  });
};

export default GetJobList;