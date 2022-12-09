import { useMutation } from "react-query";
import { MakeRequest } from "./Utilities";
import type { JobModelDto } from "../Interface/JobInterface";
import React from "react";
export const register = async (data: JobModelDto) => 
{
  return await MakeRequest({
    url: `Jobs/${data.jobId}/model/${data.modelId}`,
    method: "DELETE",
    data: data,
  });
};

export const useJobRemoveModel = () => {
  return useMutation(register, {
    onSuccess: () => {
      console.log("The model has been removed from the job");
    },
    onError: (error) => {},
  });
};
