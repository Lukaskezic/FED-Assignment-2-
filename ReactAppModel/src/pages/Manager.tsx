import { Spinner } from "flowbite-react";
import GetManagerList from "../api/ManagerAPI";
import GetJobList from "../api/JobListApi";
import CreateManager from "../PageComponents/CreateManagerComponent";
import CreateModel from "../PageComponents/CreateModelComponent";
import CreateJob from "../PageComponents/CreateJobComponent";
import AddModel from "../PageComponents/AddModelComponent";
import ManagerList from "../PageComponents/ManagerListComponent";
import JobList from "../PageComponents/JobListComponent";
import RemoveModel from "../PageComponents/RemoveModelComponent";

const Mananger = () => {
  const { data: jobsData } = GetJobList();
  console.log("job ", jobsData);

  const { data: managerData, isLoading, isError, error } = GetManagerList();
  console.log("manager ", managerData);
  if (isLoading) {
    return <Spinner color="info" size="xl" />;
  }

  if (isError) {
    return <p>{(error as any).message} </p>;
  }

  return (
    <>
      <div className="border-4 rounded border-blue-500 p-4">
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
