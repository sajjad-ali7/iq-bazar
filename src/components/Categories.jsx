import { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";
import { FaAirFreshener, FaBath, FaEye, FaGrinWink } from "react-icons/fa";
import { GiLips, GiLipstick } from "react-icons/gi";
import { CgBowl } from "react-icons/cg";
import { RiScissors2Fill } from "react-icons/ri";

const Categories = ({ onCategorySelect }) => {
  const [openList, setOpenList] = useState("");

  const handleClick = (event) => {
    if (+event.currentTarget.dataset.index === openList) return setOpenList("");
    else setOpenList(+event.currentTarget.dataset.index);
  };

  // console.log(openList);
  return (
    <div>
      <ul className="[&>li]:py-1 font-semibold text-lg">
        <li
          data-index={0}
          onClick={(e) => {
            handleClick(e);
            onCategorySelect("face");
          }}
        >
          <p className="flex items-center gap-5">
            <span className="w-4/5">
              <FaGrinWink className="pr-1 inline-block pb-2" fontSize={25} />{" "}
              Face
            </span>{" "}
            <span
              className={`transition-all duration-300 ${
                openList === 0 ? "rotate-180" : ""
              }`}
            >
              <AiOutlineArrowUp />
            </span>
          </p>
          <ul
            className={`[&>li]:py-1  [&>li]:pl-10 transition-all duration-500 ${
              openList === 0
                ? "text-fontColor mb-3 h-24 opacity-100"
                : "h-0 opacity-0 pointer-events-none"
            }`}
          >
            <li
              onClick={(e) => {
                onCategorySelect("blusher");
                e.stopPropagation();
              }}
            >
              Blusher
            </li>
            <li
              onClick={(e) => {
                onCategorySelect("foundation");
                e.stopPropagation();
              }}
            >
              Foundation
            </li>
            <li
              onClick={(e) => {
                onCategorySelect("face-powder");
                e.stopPropagation();
              }}
            >
              Face Powder
            </li>
          </ul>
        </li>
        <li
          data-index={1}
          onClick={(e) => {
            handleClick(e);
            onCategorySelect("eyes");
          }}
        >
          <p className="flex items-center gap-5">
            <span className="w-4/5">
              <FaEye className="pr-2 inline-block pb-2" fontSize={25} /> Eyes
            </span>{" "}
            <span
              className={`transition-all duration-300 ${
                openList === 1 ? "rotate-180" : ""
              }`}
            >
              <AiOutlineArrowUp />
            </span>
          </p>
          <ul
            className={`[&>li]:py-1  [&>li]:pl-10 transition-all duration-500 ${
              openList === 1
                ? "text-fontColor mb-3 h-24 opacity-100"
                : "h-0 opacity-0 pointer-events-none"
            }`}
          >
            <li
              onClick={(e) => {
                onCategorySelect("eye-shadow");
                e.stopPropagation();
              }}
            >
              Eye Shadow
            </li>
            <li
              onClick={(e) => {
                onCategorySelect("glitter");
                e.stopPropagation();
              }}
            >
              Glitter
            </li>
            <li
              onClick={(e) => {
                onCategorySelect("mascara");
                e.stopPropagation();
              }}
            >
              Mascara
            </li>
          </ul>
        </li>
        <li
          data-index={2}
          onClick={(e) => {
            handleClick(e);
            onCategorySelect("lips");
          }}
        >
          <p className="flex items-center gap-5">
            <span className="w-4/5">
              <GiLips className="pr-2 inline-block pb-2" fontSize={25} /> Lips
            </span>{" "}
            <span
              className={`transition-all duration-300 ${
                openList === 2 ? "rotate-180" : ""
              }`}
            >
              <AiOutlineArrowUp />
            </span>
          </p>
          <ul
            className={`[&>li]:py-1  [&>li]:pl-10 transition-all duration-500 ${
              openList === 2
                ? "text-fontColor mb-3 h-24 opacity-100"
                : "h-0 opacity-0 pointer-events-none"
            }`}
          >
            <li
              onClick={(e) => {
                onCategorySelect("lip-gloss");
                e.stopPropagation();
              }}
            >
              Lip Gloss
            </li>
            <li
              onClick={(e) => {
                onCategorySelect("lip-stick");
                e.stopPropagation();
              }}
            >
              Lip Stick
            </li>
            <li
              onClick={(e) => {
                onCategorySelect("lip-kit");
                e.stopPropagation();
              }}
            >
              Lip Kit
            </li>
          </ul>
        </li>
        {/* <FaGem className="inline-block mx-1" />  */}
        <li
          onClick={() => {
            onCategorySelect("accessories");
            setOpenList("");
          }}
        >
          {" "}
          <GiLipstick className="pr-2 inline-block pb-2" fontSize={25} />{" "}
          Accessories
        </li>
        <li
          onClick={() => {
            onCategorySelect("shaving-needs");
            setOpenList("");
          }}
        >
          <RiScissors2Fill className="pr-2 inline-block pb-2" fontSize={25} />{" "}
          Shaving Needs
        </li>
        <li
          onClick={() => {
            onCategorySelect("oral-care");
            setOpenList("");
          }}
        >
          <CgBowl className="pr-2 inline-block pb-2" fontSize={25} /> Oral Care
        </li>
        <li
          className="flex items-center gap-2"
          onClick={() => {
            onCategorySelect("facial-care");
            setOpenList("");
          }}
        >
          <BsFillBagHeartFill
            className="pr-2 inline-block pb-2"
            fontSize={25}
          />{" "}
          Facial Care
        </li>
        <li
          onClick={() => {
            onCategorySelect("deodorant");
            setOpenList("");
          }}
        >
          <FaAirFreshener className="pr-2 inline-block pb-2" fontSize={25} />{" "}
          Deodorant
        </li>
        <li
          onClick={() => {
            onCategorySelect("bath-oil");
            setOpenList("");
          }}
        >
          <FaBath className="pr-2 inline-block pb-2" fontSize={25} /> Bath & Oil
        </li>
      </ul>
    </div>
  );
};
export default Categories;
