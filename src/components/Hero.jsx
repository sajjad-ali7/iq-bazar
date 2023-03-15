import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="relative h-[600px] max-md:hidden">
      <div
        className="max-md:hidden absolute w-full h-full bg-bgColor transition duration-1000 bg-no-repeat bg-contain"
        style={{
          backgroundImage: "url(/bg1.jpg)",
          backgroundPosition: "left ",
        }}
      >
        <div
          className=" w-3/4 lg:w-2/3 mx-auto"
          style={{ textShadow: "1px 1px 2px black" }}
        >
          <div className="mt-36 text-center tracking-widest	">
            <h1 className="text-[50px]">Shop your designer dresses</h1>
            <p className="text-lg mb-3">
              Ready to wear dresses tailored for you online. Hurry up while
              stock lasts.
            </p>
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
