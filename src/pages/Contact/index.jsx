import BackBtn from "@/components/BackBtn";
import Container from "@/components/Container";
import CustomInput from "@/components/CustomInput";
import { Formik, Form } from "formik";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import * as yup from "yup";
const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const timer = setTimeout(() => {
        setIsSubmitting(false);
        setShowAlert(true);
      }, 2000);

      return () => clearTimeout(timer);
    }

    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isSubmitting, showAlert]);
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div className="bg-stone-100 overflow-hidden relative max-md:pb-9">
        <Alert
          showAlert={showAlert}
          msg={"Thank You For Contacting Us . We Will Get Back To You Soon"}
        />
        <Container className={"mt-8 max-md:hidden"}>
          <BackBtn />
        </Container>
        <div className="w-11/12 lg:w-3/4  py-9 mx-auto flex max-md:flex-col-reverse gap-8 justify-center">
          <div className="bg-white max-md:w-full p-3 rounded-md self-start">
            <Image
              src="/contact-us.svg"
              alt="contact-us"
              width={400}
              height={300}
              className="block my-6 max-md:mx-auto"
            />
            <div className="leading-8	">
              <div>
                <p>Address</p>
                <p className="text-gray-400">NY, United States</p>
              </div>
              <div>
                <p>Phone</p>
                <p className="text-gray-400">+129290122122</p>
              </div>
              <div>
                <p>Website</p>
                <p className="text-gray-400">NY, United States</p>
              </div>
            </div>
          </div>
          <div className="bg-white md:w-8/12 rounded-md p-3">
            <div className=" p-3">
              <h1 className="text-2xl">Questions, Comments, Or Concerns?</h1>
              <Formik
                initialValues={{
                  username: "",
                  email: "",
                  subject: "",
                  description: "",
                }}
                validationSchema={yup.object({
                  username: yup
                    .string("Name Must Be String")
                    .required("Name is Required"),
                  email: yup
                    .string()
                    .email("Invalid Email")
                    .required("Email is Required"),
                  subject: yup.string().min(3).required(),
                  description: yup.string().min(3).required(),
                })}
                onSubmit={() => {
                  setIsSubmitting(true);
                }}
              >
                {() => (
                  <Form>
                    <div className="flex max-sm:flex-col gap-x-5 mt-5">
                      <CustomInput label={"Name"} name="username" />
                      <CustomInput label={"Email"} name="email" />
                    </div>
                    <CustomInput label={"Subject"} name="subject" />
                    <CustomInput
                      label={"Description"}
                      name="description"
                      type="textarea"
                    />
                    <button
                      type="submit"
                      className="btn btn-info submit bg-fontColor outline-none border-none hover:bg-fontColor text-white mt-2"
                      disabled={isSubmitting}
                    >
                      <span className="flex items-center  justify-center">
                        Submit {isSubmitting && <Spinner />}
                      </span>
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;

export const Spinner = () => {
  return (
    <div class="lds-ring ">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export const Alert = ({ showAlert, msg }) => {
  return (
    <div
      className={`alert top-9 transition-all duration-700 fixed alert-success text-white md:w-96 shadow-lg ${
        showAlert ? "right-0" : "-right-full"
      }`}
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current flex-shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="px-2">{msg}</span>
      </div>
    </div>
  );
};
