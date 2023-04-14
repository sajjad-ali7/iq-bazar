import { default as axiosInstanace } from "./Axios";

export const getProducts = async (val) => {
  try {
    const res = await axiosInstanace.get(val);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getProductsBySearch = async (searchValue) => {
  try {
    const res = await axiosInstanace.get(
      `products?searchJoin=and&with=type%3Bauthor&limit=30&language=en&search=type.slug:makeup%3Bname:${searchValue}%3Bstatus:publish`
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getProductsByCategory = async (currentPage, searchValue) => {
  try {
    const res = await axiosInstanace.get(
      `products?searchJoin=and&with=type%3Bauthor&limit=30&language=en&search=type.slug:makeup%3Bcategories.slug:accessories-1%3Bstatus:publish`
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};

// https://pickbazar-react-rest.vercel.app/_next/data/2fr_2lu3lNe0x0zQ-yBVs/en/makeup.json?pages=makeup&category=blusher&text=face

// 'https://mock.redq.io/api/categories/makeup?language=en'
