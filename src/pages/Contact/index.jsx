import CustomInput from "@/components/CustomInput";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Head from "next/head";
import * as yup from "yup";
const index = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div className="bg-stone-100 ">
        <div className="w-11/12 md:w-3/4  py-16 mx-auto flex max-md:flex-col-reverse gap-8 justify-center">
          <div className="bg-white p-3 ">
            <img
              src="/contact-us.svg"
              alt="contact-us"
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
          <div className="bg-white md:w-8/12">
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
                  username: yup.string("").min(3).required(),
                  email: yup.string().required(),
                  subject: yup.string().min(3).required(),
                  description: yup.string().min(3).required(),
                })}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="flex max-sm:flex-col gap-5 [&>input]:flex-grow">
                      <CustomInput label={"username"} name="username" />
                      <Field
                        className="border-black border "
                        type="text"
                        name="username"
                      />
                      <ErrorMessage name="username" component="div" />
                      <Field
                        className="border-black border"
                        type="email"
                        name="email"
                      />
                      <ErrorMessage name="email" component="div" />
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                      Submit
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

export default index;
