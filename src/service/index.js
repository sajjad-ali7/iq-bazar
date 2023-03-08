import { default as axiosInstanace } from "./Axios";

export const getAutoComplete = async (searchKey) => {
  if (searchKey.trim() === "") return;
  try {
    let res = await axiosInstanace.get(`v2/auto-complete?q=${searchKey}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getList = async () => {
  let res = await axiosInstanace.get(`categories/list`);
  return res;
};
