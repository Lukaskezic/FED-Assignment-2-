import { ChangeEvent, useState } from "react";
import { UseAddedModel } from "../APIs/PostAddModelToJob";
import type { JobModelDto } from "../Interface/JobInterface";
import { Button, TextInput, Label } from "flowbite-react";
import React from "react";

const AddModel = () => {
  const { mutate: register } = UseAddedModel();
  const [modelId, setModelId] = useState<number>(0);
  const [jobId, setJobId] = useState<number>(0);

  const handleOnSubmit = () => {
    const expenseDto: JobModelDto = {
      modelId: modelId,
      jobId: jobId,
    };
    register(expenseDto);
  };
  return (
    <div className="border rounded border-black-400 bg-white overflow-hidden shadow-lg flex p-4 justify-center">
      <div className="flex flex-col">
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
          <div className="flex flex-col mx-2">
            <Label>Add Model To Job</Label>
            <Button onClick={handleOnSubmit}>Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddModel;
