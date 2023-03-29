import { default as axiosInstanace } from "./Axios";
import { getAuth, signInAnonymously } from "firebase/auth";
import { app } from "@/fireBase";

const auth = getAuth(app);

signInAnonymously(auth)
  .then((el) => {
    localStorage.setItem("userId", el.user.uid);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error);
    // ...
  });

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
