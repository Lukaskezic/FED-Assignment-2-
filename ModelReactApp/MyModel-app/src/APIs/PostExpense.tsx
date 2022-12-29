import { useMutation } from "react-query";
import { MakeRequest } from "./Utilities";
import { ExpenseDto } from "../Interface/ExpenseInterface";


export const RegisterExpense = async (data: ExpenseDto) => 
{
  return await MakeRequest({
    url: `Expenses`,
    method: "POST",
    data: data,
  });
};

export const AddExpense = () => 
{
  return useMutation(RegisterExpense, 
    {
    onSuccess: () => 
    {
      console.log("An expense has successfully been added");
    },
    onError: (error) =>
    {
      console.log((error as any).message);
    },
  });
};
