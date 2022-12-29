import { useState } from "react";
import { ChangeEvent } from "react";
import type { JobRegisterDto } from "../Interface/JobInterface";
import { AddJob } from "../APIs/PostJob";
import { Button, Label, TextInput } from "flowbite-react";
import React from "react";

export default function CreateJob() 
{
  const [customer, setCustomer] = useState("");
  const [startdate, setstartDate] = useState("");
  const [days, setDays] = useState<number>(0);
  const [location, setLocation] = useState("");
  const [comments, setComments] = useState("");

  const { mutate: register } = AddJob();

  const handleSubmit = () => {
    const job: JobRegisterDto = {
      customer: customer,
      startdate: startdate,
      days: days,
      location: location,
      comments: comments,
    };
    register(job);
  };

  return (
    <div className="border rounded border-blue-400 bg-white overflow-hidden shadow-lg flex p-4 justify-center">
      <div className="flex flex-col">
        <form className="flex flex-wrap">
          <div className="flex flex-col">
            <Label>Customer</Label>
            <TextInput
              type="Text"
              required
              placeholder="Customer"
              value={customer}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setCustomer(e.target.value)
              }
            />
          </div>
          <div className="flex flex-col">
            <Label>Start Date</Label>
            <TextInput
              type="Date"
              required
              placeholder="Start Date"
              value={startdate}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setstartDate(e.target.value)
              }
            />
          </div>
          <div className="flex flex-col">
            <Label>Days</Label>
            <TextInput
              required
              type="Number"
              placeholder="0"
              value={days}
              min={0}
              max={365}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setDays(e.target.valueAsNumber)
              }
            />
          </div>
          <div className="">
            <Label>Location</Label>
            <TextInput
              type="Text"
              required
              placeholder="Location"
              value={location}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setLocation(e.target.value)
              }
            />
          </div>
          <div className="">
            <Label>Create a Job</Label>
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
