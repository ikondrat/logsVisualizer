import axios from "axios";
import { Routes } from "../shared/Routes";

async function get(url: string) {
  try {
    const response = await axios.get(url);
    return { response: response.data };
  } catch (error) {
    return { error };
  }
}

const apiHost = "http://localhost:3001";
export const logsApi = {
  getAll: () => get(`${apiHost}${Routes.getLogsAll}`)
};
