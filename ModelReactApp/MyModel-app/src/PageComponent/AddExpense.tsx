import { ChangeEvent, useState } from "react";
import { AddExpense } from "../APIs/PostExpense";
import { ExpenseDto } from "../Interface/ExpenseInterface";
import { Button, TextInput, Label } from "flowbite-react";

const AddAnExpense = () => 
{
  const { mutate: expense } = AddExpense();
  const [modelId, setModelId] = useState<number>(0);
  const [jobId, setJobId] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);
  const [date, setDate] = useState<string>("");
  const [textValue, setTextValue] = useState<string>("");

  const handleOnSubmit = () => 
  {
    const expenseDto: ExpenseDto = 
    {
      modelId: modelId,
      jobId: jobId,
      date: date,
      text: textValue,
      amount: amount,
    };
    expense(expenseDto);
  };

  return (
    <div className="border rounded border-blue-400 bg-white overflow-hidden shadow-lg flex p-4 justify-center">
      <form className="flex flex-wrap">
        <div className="flex flex-col mx-2">
          <Label>Model Id</Label>
          <TextInput
            type="Number"
            required
            placeholder="200"
            value={modelId}
            min={"0"}
            max={"10000"}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setModelId(e.target.valueAsNumber)
            }
          />
        </div>
        <div className="flex flex-col mx-2">
          <Label>Job Id</Label>
          <TextInput
            type="Number"
            required
            placeholder="200"
            value={jobId}
            min={"0"}
            max={"10000"}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setJobId(e.target.valueAsNumber)
            }
          />
        </div>

        <div className="flex col class">
          <Label>Text</Label>
          <TextInput
            type="Text"
            required
            placeholder="Text"
            value={textValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTextValue(e.target.value)
            }
          />
        </div>

        <div className="flex col class">
          <Label>Date</Label>
          <TextInput
            type="date"
            required
            placeholder="current date"
            value={date}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setDate(e.target.value)
            }
          />
        </div>

        <div className="flex col class">
          <Label>Amount</Label>
          <TextInput
            required
            type="number"
            placeholder="356"
            value={amount}
            min={"0"}
            max={"5000"}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setAmount(e.target.valueAsNumber)
            }
          />
        </div>
        <div className="flex col class">
          <Label>Add Expense To Job</Label>
          <Button onClick={handleOnSubmit}> Add Expense</Button>
        </div>
      </form>
    </div>
  );
};

export default AddAnExpense;
