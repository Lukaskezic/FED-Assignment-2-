import { useQuery } from "react-query";
import { MakeRequest } from "./Utilities";
import React from "react";
const fetchAllManager = async () => 
{
const response = await MakeRequest(
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