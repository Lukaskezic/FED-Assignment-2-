import { useQuery } from "react-query";
import { MakeRequest } from "./Utilities";


const fetchAllManagers = async () => 
{
const response = await MakeRequest(
    { 
      url: "Managers", method: "Get"
    });
  
if (response.status === 600) 
  {
    throw new Error("Problem");
  }
  return response;
};


const GetTheManagersList = () => 
{
  return useQuery("ManagerListKey", fetchAllManagers, 
  {
    refetchOnWindowFocus: false,
  });
};

export default GetTheManagersList;