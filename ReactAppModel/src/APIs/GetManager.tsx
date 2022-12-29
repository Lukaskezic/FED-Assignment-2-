import { useQuery } from "react-query";
import { MakeRequest } from "./Utilities";

const FetchManagers = async () =>
{
  const response = await MakeRequest(
    {
      url: "managers", method: "get"
    });
    
  if (response.status === 304)
  {
    throw new Error("Fetching problem with manager");
  }
  return response;
};


const GetManagers = () =>
{
  return useQuery("managersKey", FetchManagers,
  {
    refetchOnWindowFocus: false,
  });
};

export default GetManagers;