import { default as axiosInstanace } from "./Axios";

export const getAutoComplete = async (searchKey) => {
  if (searchKey.trim() === "") return;
  let res = await axiosInstanace.get(`v2/auto-complete?q=${searchKey}`);
  return res?.data?.suggestionGroups[0]?.suggestions;
};

export const getList = async () => {
  let res = await axiosInstanace.get(`categories/list`);
  return res;
};
