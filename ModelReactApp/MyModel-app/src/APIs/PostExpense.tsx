import { useMutation } from "react-query";
import { MakeRequest } from "./Utilities";
import { ExpenseDto } from "../Interface/ExpenseInterface";


export const CreateExpense = async (data: ExpenseDto) => 
{
  return await MakeRequest({
    url: `Expenses`,
    method: "POST",
    data: data,
  });
};

export const UseCreatedExpense = () => 
{
  return useMutation(CreateExpense, 
    {
    onSuccess: () => 
    {
      console.log("The expense has succesfully been added");
    },
    onError: (error) => {
      console.log((error as any).message);
    },
  });
};
