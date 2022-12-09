import { useMutation } from "react-query";
import { MakeRequest } from "./Utilities";
import type { JobRegisterDto } from "../Interface/JobInterface";

export const registerJob = async (data: JobRegisterDto) => 
{
  return await MakeRequest({
    url: `Jobs`,
    method: "POST",
    data: data,
  });
};




export const useRegisterJob = () => 
{
  return useMutation(registerJob, 
    {
    onSuccess: () => 
    {
      console.log("The job has been added");
    },
    onError: (error) => 
    {
      console.log((error as any).message);
    },
    });
};
