import { useQuery } from "react-query";
import { request } from "../Utilities";

const fetchAllManager = async () => 
{
const response = await request(
    { url: "managers", method: "get"});
  if (response.status === 304) 
  {
    throw new Error("Problem fetching data");
  }

  return response;
};


const GetManagersList = () => 
{
  return useQuery("managersKey", fetchAllManager, 
  {
    refetchOnWindowFocus: false,
  });
};

export default GetManagersList;