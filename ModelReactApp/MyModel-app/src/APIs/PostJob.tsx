import type { JobRegisterDto } from "../Interface/JobInterface";
import { MakeRequest } from "./Utilities";
import { useMutation } from "react-query";

export const registerAJob = async (data: JobRegisterDto) => 
{
  return await MakeRequest({
    url: `Jobs`,
    method: "POST",
    data: data,
  });
};

export const useRegisterJob = () => 
{
  return useMutation(registerAJob, 
    {
    onSuccess: () => 
    {
      console.log("The job has been added successfully");
    },
    onError: (error) => 
    {
      console.log((error as any).message);
    },
    });
};
