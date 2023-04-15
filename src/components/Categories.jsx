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
    if (+event.target.dataset.index === openList) return setOpenList("");
    else setOpenList(+event.target.dataset.index);
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
          <p data-index={0} className="flex items-center gap-5">
            <span data-index={0} className="w-4/5">
              <FaGrinWink className="pr-2 inline-block" fontSize={30} /> Face
            </span>{" "}
            <span
              data-index={0}
              className={`transition-all duration-300 ${
                openList === 0 ? "rotate-180" : ""
              }`}
            >
              <AiOutlineArrowUp />
            </span>
          </p>
          <ul
            className={`[&>li]:py-1 transition-all duration-500 ${
              openList === 0
                ? "text-fontColor h-24 opacity-100"
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
          <p data-index={1} className="flex items-center gap-5">
            <span data-index={1} className="w-4/5">
              <FaEye className="pr-2 inline-block" fontSize={30} /> Eyes
            </span>{" "}
            <span
              data-index={1}
              className={`transition-all duration-300 ${
                openList === 1 ? "rotate-180" : ""
              }`}
            >
              <AiOutlineArrowUp />
            </span>
          </p>
          <ul
            className={`[&>li]:py-1 transition-all duration-500 ${
              openList === 1
                ? "text-fontColor h-24 opacity-100"
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
          <p data-index={2} className="flex items-center gap-5">
            <span data-index={2} className="w-4/5">
              <GiLips className="pr-2 inline-block" fontSize={30} /> Lips
            </span>{" "}
            <span
              data-index={2}
              className={`transition-all duration-300 ${
                openList === 2 ? "rotate-180" : ""
              }`}
            >
              <AiOutlineArrowUp />
            </span>
          </p>
          <ul
            className={`[&>li]:py-1 transition-all duration-500 ${
              openList === 2
                ? "text-fontColor h-24 opacity-100"
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
        <li onClick={() => onCategorySelect("accessories")}>
          {" "}
          <GiLipstick className="pr-2 inline-block" fontSize={30} /> Accessories
        </li>
        <li onClick={() => onCategorySelect("shaving-needs")}>
          <RiScissors2Fill className="pr-2 inline-block" fontSize={30} />{" "}
          Shaving Needs
        </li>
        <li onClick={() => onCategorySelect("oral-care")}>
          <CgBowl className="pr-2 inline-block" fontSize={30} /> Oral Care
        </li>
        <li
          className="flex items-center gap-2"
          onClick={() => onCategorySelect("facial-care")}
        >
          <BsFillBagHeartFill className="pr-2 inline-block" fontSize={30} />{" "}
          Facial Care
        </li>
        <li onClick={() => onCategorySelect("deodorant")}>
          <FaAirFreshener className="pr-2 inline-block" fontSize={30} />{" "}
          Deodorant
        </li>
        <li onClick={() => onCategorySelect("bath-oil")}>
          <FaBath className="pr-2 inline-block" fontSize={30} /> Bath & Oil
        </li>
      </ul>
    </div>
  );
};
export default Categories;
