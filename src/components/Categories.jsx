import { useState } from "react";

const Categories = ({ onCategorySelect }) => {
  const [openList, setOpenList] = useState("");

  const handleClick = (event) => {
    if (+event.target.dataset.index === openList) return setOpenList("");
    setOpenList(+event.target.dataset.index);
  };
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
          {/* <MdFace2 className="inline-block mx-1" /> */}
          Face
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
          {/* <RiEyeCloseFill className="inline-block mx-1" />  */}
          Eyes
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
          {/* <GiLipstick className="inline-block mx-1" />  */}
          Lips
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
        <li onClick={() => onCategorySelect("accessories")}>Accessories</li>
        <li onClick={() => onCategorySelect("shaving-needs")}>Shaving Needs</li>
        <li onClick={() => onCategorySelect("oral-care")}>Oral Care</li>
        <li
          className="flex items-center gap-2"
          onClick={() => onCategorySelect("facial-care")}
        >
          Facial Care
        </li>
        <li onClick={() => onCategorySelect("deodorant")}>Deodorant</li>
        <li onClick={() => onCategorySelect("bath-oil")}>Bath & Oil</li>
      </ul>
    </div>
  );
};
export default Categories;
