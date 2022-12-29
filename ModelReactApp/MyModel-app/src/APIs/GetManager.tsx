import { useQuery } from "react-query";
import { MakeRequest } from "./Utilities";

const FetchManagers = async () => 
{
const response = await MakeRequest(
    { 
      url: "Managers", method: "Get"
    });
  
if (response.status === 304) 
  {
    throw new Error("Fetching problem with manager");
  }
  return response;
};


const GetManagers = () => 
{
  return useQuery("ManagerListKey", FetchManagers, 
  {
    refetchOnWindowFocus: false,
  });
};

export default GetManagers;