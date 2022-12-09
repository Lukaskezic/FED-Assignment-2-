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
