import { default as axiosInstanace } from "./Axios";

export const getProducts = async (val) => {
  try {
    const res = await axiosInstanace.get(val);
    return res;
  } catch (err) {
    console.log(err);
  }
};
