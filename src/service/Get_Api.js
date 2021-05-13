import Axios from "axios";
//api call
export const GET_API = async (url) => {
  return await Axios.get(url);
};
