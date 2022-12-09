import { useMutation } from "react-query";
import { request } from "../Utilities";
import type { ModelRegisterDto } from "../../Interface/ModelInterface";

export const RegisterModel = async (data: ModelRegisterDto) => 
{
  return await request({
    url: `Models`,
    method: "POST",
    data: data,
  });
};

export const useRegisteredModel = () => 
{
  return useMutation(RegisterModel, 
    {
    onSuccess: () => 
    {
      console.log("Model has succesfully been created been created");
    },
    onError: (error) => 
    {
      console.log((error as any).message);
    },
  });
};