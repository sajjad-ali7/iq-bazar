import BackBtn from "@/components/BackBtn";
import Container from "@/components/Container";
import Head from "next/head";
import { useState } from "react";

const faqObj = [
  {
    key: 1,
    question: "How to contact with Customer Service?",
    answer:
      "Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.",
  },
  {
    key: 2,
    question: "App installation failed, how to update system information?",
    answer:
      "Please read the documentation carefully . We also have some online video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum",
  },
  {
    key: 3,
    question: "Website response taking time, how to improve?",
    answer:
      "At first, Please check your internet connection . We also have some online video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum.",
  },
  {
    key: 4,
    question: "How do I create a account?",
    answer:
      "If you want to open an account for personal use you can do it over the phone or online. Opening an account online should only take a few minutes.",
  },
];

const FAQ = () => {
  return (
    <>
      <Head>
        <title>FAQ</title>
      </Head>
      <div
        className="py-20 text-center bg-stone-100"
        style={{ minHeight: "calc(100vh - 86px)" }}
      >
        <Container className={"-mt-10 max-md:hidden"}>
          <BackBtn />
        </Container>
        <div className="mt-3">
          <h1 className="text-3xl">FAQ</h1>

          <div className="w-11/12 md:w-3/4 mt-7 mx-auto">
            {faqObj.map((e, i) => (
              <Collapse key={i} {...e} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;

const Collapse = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen((prev) => !prev)}
      className={`${
        open ? "collapse-open" : "collapse-close"
      } cursor-pointer  md:text-left  collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-3`}
    >
      <div className="collapse-title text-xl font-medium">{question}</div>
      <div className="collapse-content">
        <p>{answer}</p>
      </div>
    </div>
  );
};
