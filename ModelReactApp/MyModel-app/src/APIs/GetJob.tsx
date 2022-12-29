import { useQuery } from "react-query";
import { MakeRequest } from "./Utilities";

const FetchJobs = async () => 
{
  const response = await MakeRequest(
    { 
      url: "Jobs", method: "Get" 
    });
  
    if (response.status === 304) 
  {
    throw new Error("Fetching problem with job");
  }
  return response;
};

const GetJobs = () => 
{
  return useQuery("JobKey", FetchJobs, 
  {
    refetchOnWindowFocus: false,
  });
};

export default GetJobs;