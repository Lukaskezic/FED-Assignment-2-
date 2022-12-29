import { Spinner } from "flowbite-react";
import CreateManager from "../PageComponent/CreateAManager";
import ManagerList from "../PageComponent/GetManagerList";
import JobList from "../PageComponent/GetJob";
import RemoveModel from "../PageComponent/RemoveModelsFromJobs";
import CreateModel from "../PageComponent/CreateAModel";
import CreateJob from "../PageComponent/CreateAJob";
import AddModel from "../PageComponent/AddModel";
import GetManagers from "../APIs/GetManager";
import GetJobs from "../APIs/GetJob";

const Mananger = () => 
{
  const { data: jobsData } = GetJobs();
  console.log("Job ", jobsData);
  const { data: managerData, isLoading, isError, error } = GetManagers();
  console.log("Manager ", managerData);
  if (isLoading) {
    return <Spinner color="info" size="xl" />;
  }

  if (isError) {
    return <p>{(error as any).message} </p>;
  }

  return (
    <>
      <div className="border-4 rounded border-grey-500 p-4">
        <CreateJob />
        <CreateManager />
        <AddModel />
        <RemoveModel />
        <CreateModel />
        <ManagerList managerData={managerData?.data} />
        <JobList jobList={jobsData?.data} />
      </div>
    </>
  );
};

export default Mananger;