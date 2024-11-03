import { instance } from "../plugin/axios";

export const getDomains = () => {
  return instance.get("/domains");
};

export const getCustomers = () => {
  return instance.get("/customers");
};
