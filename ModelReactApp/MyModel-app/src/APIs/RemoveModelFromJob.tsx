import { useMutation } from "react-query";
import { request } from "../Utilities";
import type { JobModelDto } from "../../interface/JobInterface";

export const register = async (data: JobModelDto) => 
{
  return await request({
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
