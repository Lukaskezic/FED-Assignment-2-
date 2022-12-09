import { useMutation } from "react-query";
import { request } from "../Utilities";
import type { ManagerRegisterDto } from "../../Interface/ManagerInterface";


export const RegisterManager = async (data: ManagerRegisterDto) => 
{
  return await request({
    url: `Manager`,
    method: "POST",
    data: data,
  });
};

export const UserRegisteredManager = () => {
  return useMutation(RegisterManager, {
    onSuccess: () => {
      console.log("A manager has succesfully been created");
    },
    onError: (error) => {
      console.log((error as any).message);
    },
  });
};
