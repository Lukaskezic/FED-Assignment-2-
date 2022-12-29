import AddExpense from "../PageComponent/AddExpense";
import JobList from "../PageComponent/GetJob";
import { Spinner } from "flowbite-react";
import GetJobs from "../APIs/GetJob"

const Model = () => 
{
  const { data: jobsData, isLoading, isError, error } = GetJobs();
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