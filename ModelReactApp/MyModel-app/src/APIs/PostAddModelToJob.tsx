
import { useMutation, useQueryClient } from "react-query";
import { request } from "../Utilities";
import type { JobModelDto } from "../../Interface/JobInterface";

export const registerJob = async (data: JobModelDto) => 
{
  return await request({
    url: `Jobs/${data.jobId}/model/${data.modelId}`,
    method: "POST",
    data: data,
  });
};



export const UseAddedModel = () => 
{
  const queryClient = useQueryClient();
  return useMutation(registerJob, 
    {
    onSuccess: () => 
    {
      console.log("The model has been added to the job successfully");
    },
    onError: (error) => {
      console.log((error as any).message);
    },
    onSettled: () => {
      queryClient.invalidateQueries("jobsKey");
    },
  });
};
