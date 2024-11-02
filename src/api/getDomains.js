import { instance } from "../plugin/axios";

export const getDomains = () => {
  return instance.get("/domains");
};
