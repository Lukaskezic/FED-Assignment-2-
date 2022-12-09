import { Spinner } from "flowbite-react";
import GetJobList from "../APIs/GetJob";
import AddExpense from "../PageComponent/AddExpense";
import JobList from "../PageComponent/GetJob";
import React from "react";

const Model = () => 
{
  const { data: jobsData, isLoading, isError, error } = GetJobList();
  console.log("job ", jobsData);

  if (isLoading) {
    return <Spinner color="info" size="xl" />;
  }

  if (isError) {
    return <p>{(error as any).message} </p>;
  }

  return (
    <>
      <div className="border-4 rounded border-blue-500 p-4">
        <AddExpense />
        <JobList jobList={jobsData?.data} />
      </div>
    </>
  );
};

export default Model;