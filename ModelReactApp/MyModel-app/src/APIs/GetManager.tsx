import { useQuery } from "react-query";
import { MakeRequest } from "./Utilities";
import React from "react";

const fetchAllManagers = async () => 
{
const response = await MakeRequest(
    { 
      url: "managers", method: "get"
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