import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="relative h-[600px] max-md:hidden">
      <div
        className="max-md:hidden absolute w-full h-full bg-bgColor transition duration-1000 bg-no-repeat bg-contain"
        style={{
          backgroundImage: "url(/bgg.webp)",
          backgroundPosition: "bottom ",
        }}
      >
        <div className="relative z-50 w-3/4 lg:w-2/3 mx-auto">
          <div className="mt-36 text-center tracking-widest	">
            <h1 className="text-3xl lg:text-5xl mb-2">
              Branded & imported makeups
            </h1>
            <p className="text-lg mb-3 font-bold">
              Easiest and cheapest way to get your branded & imported makeups
            </p>
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
