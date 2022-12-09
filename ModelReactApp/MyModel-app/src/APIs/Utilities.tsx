import axios from "axios";
import { server } from "./Configs";

const client = axios.create({ baseURL: server });

const getUtiToken = () => {
  return localStorage.getItem("token");
};

export const MakeRequest = ({ ...options }) => 
{
  client.defaults.headers.common["Authorization"] = `Bearer ${getUtiToken()}`;
  const onSuccess = (response: any) => 
  {
    return response;
  };
  const onError = (error: any) => 
  {
    return error;
  };
  return client(options).then(onSuccess).catch(onError);
};

export const SetupInterceptors = () => 
{
  client.interceptors.response.use(
    function (response) 
    {
      return response;
    },
    (error) => 
    {
      return error;
    }
  );
};
