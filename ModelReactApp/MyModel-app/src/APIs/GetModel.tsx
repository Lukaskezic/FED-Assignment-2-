import { useQuery } from "react-query";
import { MakeRequest } from "./Utilities";

const FetchModels = async () => 
{
  const response = await MakeRequest(
  { 
    url: "Models", method: "Get" 
  });

  if (response.status === 304) 
  {
    throw new Error("Fetching problem with models");
  }
  return response;
};


const GetModels = () => 
{
  return useQuery("ModelKey", FetchModels, 
  {
    refetchOnWindowFocus: false,
  });
};

export default GetModels;
