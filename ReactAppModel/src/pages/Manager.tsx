import GetManagers from "../APIs/GetManager";
import GetJobs from "../APIs/GetJob";
import CreateManager from "../Components/CreateManager";
import CreateModel from "../Components/CreateModel";
import CreateJob from "../Components/CreateJob";
import AddModel from "../Components/AddModel";
import ManagerList from "../Components/GetManagerList";
import JobList from "../Components/GetJobList";
import RemoveModel from "../Components/RemoveModelsFromJob";

const Mananger = () =>
{
  const { data: jobsData } = GetJobs();
  console.log("job ", jobsData);

  const { data: managerData} = GetManagers();
  console.log("manager ", managerData);

  return (
    <>
        <CreateJob />
        <CreateManager />
        <AddModel />
        <RemoveModel />
        <CreateModel />
        <ManagerList managerData={managerData?.data} />
        <JobList jobList={jobsData?.data} />
    </>
  );
};

export default Mananger;
