import { useMutation } from "react-query";
import { MakeRequest } from "./Utilities";
import type { ManagerRegisterDto } from "../Interface/ManagerInterface";
import React from "react";

export const RegisterManager = async (data: ManagerRegisterDto) => 
{
  return await MakeRequest({
    url: `Manager`,
    method: "POST",
    data: data,
  });
};

export const AddManager = () => {
  return useMutation(RegisterManager, {
    onSuccess: () =>
    {
      console.log("A manager has successfully been added");
    },
    onError: (error) =>
    {
      console.log((error as any).message);
    },
  });
};
