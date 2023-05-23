import { useRouter } from "next/router";
import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const BackBtn = ({ className }) => {
  const router = useRouter();
  return (
    <div className={className}>
      <button
        className="text-fontColor text-xl pl-10 flex items-center gap-1"
        onClick={() => router.push("/")}
      >
        <AiOutlineArrowUp className="-rotate-90" /> <span>Back</span>
      </button>
    </div>
  );
};

export default BackBtn;
