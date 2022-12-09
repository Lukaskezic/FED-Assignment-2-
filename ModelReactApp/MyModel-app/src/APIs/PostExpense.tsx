import { useMutation } from "react-query";
import { MakeRequest } from "./Utilities";
import { ExpenseDto } from "../Interface/ExpenseInterface";


export const CreateAnExpense = async (data: ExpenseDto) => 
{
  return await MakeRequest({
    url: `Expenses`,
    method: "POST",
    data: data,
  });
};

export const UseCreatedExpense = () => 
{
  return useMutation(CreateAnExpense, 
    {
    onSuccess: () => 
    {
      console.log("The expense is added successfully");
    },
    onError: (error) => {
      console.log((error as any).message);
    },
  });
};
