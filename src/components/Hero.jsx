import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="relative h-[600px] max-md:hidden">
      <div
        className="max-md:hidden absolute w-full h-full bg-black  transition duration-1000 bg-no-repeat bg-cover bg-bottom"
        style={{ backgroundImage: "url(/s.jpg)" }}
      >
        <div className=" w-1/2 mx-auto ">
          <div className="mt-64 text-center text-white">
            <h1 className="text-[50px]  ">Shop your designer dresses</h1>
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
