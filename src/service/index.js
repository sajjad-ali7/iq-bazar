import { default as axiosInstanace } from "./Axios";

export const getProducts = async (currentPage) => {
  try {
    const res = await axiosInstanace.get(
      `products?searchJoin=and&with=type;author&limit=20&page=${currentPage}&language=en&search=type.slug:makeup;status:publish`
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};

// 'https://mock.redq.io/api/categories/makeup?language=en'
