import CheckoutInputs from "@/components/CheckoutInputs";
import { calcTotalPrice, priceFormatter } from "@/helpers";
import { cartItemsState, showCartState } from "@/recoil";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import * as yup from "yup";
import { Alert, Spinner } from "../Contact";
const Checkout = () => {
  const router = useRouter();
  const [showAlert, setShowAlert] = useState(false);
  const [, showCart] = useRecoilState(showCartState);
  const [cartItems] = useRecoilState(cartItemsState);
  useEffect(() => {
    showCart(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (showAlert) {
      const counter = setTimeout(() => {
        setShowAlert(false);
        router.push("/");
      }, 3000);
      return () => clearTimeout(counter);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showAlert]);

  return (
    <Formik
      initialValues={{
        name: "",
        phoneNumber: "",
        shippingAddress: "",
        deliveryDate: { fromTo: "", date: "", id: null },
      }}
      validationSchema={yup.object({
        name: yup.string().required("Name Is A Required Field"),
        phoneNumber: yup
          .string()
          .min(11, "PHONE NUMBER MUST BE AT LEAST 11 CHARACTERS")
          .max(11, "PHONE NUMBER MUST BE LESS THAN 12 CHARACTERS")
          .required("PHONE NUMBER IS A REQUIRED FIELD"),
        shippingAddress: yup
          .string()
          .required("Shipping Address IS A REQUIRED FIELD"),
        deliveryDate: yup
          .object({
            date: yup.string().required("Delivery Date is Required"),
            fromTo: yup.string().required("Delivery Date is Required"),
          })
          .required("Delivery Date is Required"),
      })}
      onSubmit={(e) => {
        setShowAlert(true);
      }}
    >
      {({ setFieldValue, values, errors }) => (
        <Form>
          <div className="bg-bgColor h-screen relative">
            <Alert
              showAlert={showAlert}
              msg={"Thank You For Contacting Us . We Will Get Back To You Soon"}
            />
            <div className="w-11/12 md:w-3/4 m-auto flex md:flex-row flex-col gap-5 py-10 max-md:pb-20">
              <div className="md:w-2/3 flex flex-col gap-5">
                <CheckoutInputs name={"name"} header={"Name"} number={1} />
                <CheckoutInputs
                  name={"phoneNumber"}
                  header={"Phone Number"}
                  type={"tel"}
                  number={2}
                />
                <CheckoutInputs
                  name={"shippingAddress"}
                  header={"Shipping Address"}
                  number={3}
                />
                <CheckoutInputs
                  name={"deliveryDate"}
                  header={"Delivery Schedule"}
                  number={4}
                >
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                    <SelectBtn
                      selectedID={values.deliveryDate.id}
                      id={1}
                      setFieldValue={setFieldValue}
                      date={"Express Delivery"}
                      fromTo={"90 min express delivery"}
                    />
                    <SelectBtn
                      selectedID={values.deliveryDate.id}
                      id={2}
                      setFieldValue={setFieldValue}
                      date={"Morning"}
                      fromTo={"8.00 AM - 11.00 AM"}
                    />
                    <SelectBtn
                      selectedID={values.deliveryDate.id}
                      id={3}
                      setFieldValue={setFieldValue}
                      date={"Noon"}
                      fromTo={"11.00 AM - 2.00 PM"}
                    />
                    <SelectBtn
                      selectedID={values.deliveryDate.id}
                      id={4}
                      setFieldValue={setFieldValue}
                      date={"Afternoon"}
                      fromTo={"2.00 PM - 5.00 PM"}
                    />
                    <SelectBtn
                      selectedID={values.deliveryDate.id}
                      id={5}
                      setFieldValue={setFieldValue}
                      date={"Evening"}
                      fromTo={"5.00 PM - 8.00 PM"}
                    />
                  </div>
                </CheckoutInputs>
              </div>
              <div className="md:w-1/3">
                <YourOrders cartItems={cartItems} />
                {cartItems.length > 0 && (
                  <button
                    type="submit"
                    className={`${
                      Object.values(errors).length > 0
                        ? "bg-stone-500 cursor-not-allowed"
                        : "bg-fontColor"
                    }  transition-all duration-300 p-1 text-center text-white rounded-lg text-2xl tracking-widest font-light w-full`}
                  >
                    {"Order"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Checkout;

const YourOrders = ({ cartItems }) => {
  return (
    <div>
      <h1 className="text-center text-xl font-bold">Your Orders</h1>
      <div className="flex flex-col gap-2 py-6">
        {cartItems.length > 0 ? (
          cartItems?.map((el) => (
            <div key={el.id} className="flex items-center justify-between">
              <div className="flex gap-1">
                <strong>{el.amount}</strong>
                <span>x</span>{" "}
                <p title={el.name}>
                  {el.name.length > 20 ? `${el.name.slice(0, 20)}...` : el.name}
                </p>
              </div>
              <p>$ {el.price}</p>
            </div>
          ))
        ) : (
          <h1 className="text-center text-2xl">No Orders Yet</h1>
        )}
      </div>

      <hr />

      {cartItems.length > 0 && (
        <div className="flex flex-col gap-2 py-3 mb-2">
          <p className="flex justify-between items-center">
            <span>Total</span>
            <span>{priceFormatter(calcTotalPrice(cartItems))}</span>
          </p>
        </div>
      )}
    </div>
  );
};

const SelectBtn = ({ selectedID, id, date, fromTo, setFieldValue }) => {
  return (
    <button
      type="button"
      onClick={() => setFieldValue("deliveryDate", { date, fromTo, id })}
      className={`border ${
        selectedID === id ? "scale-110 bg-bgColor" : ""
      } self-start rounded-md hover:bg-drawerBg transition-all duration-300 flex flex-col gap-2 text-center items-center border-fontColor p-2`}
    >
      <p>{date}</p>
      <p>{fromTo}</p>
    </button>
  );
};
