import logo from "../../assets/logo_nobg.png";

function Logo({ scrollTo }) {
  return (
    <img
      src={logo}
      alt="Logo"
      onClick={() => scrollTo("home")}
      className="w-[50px] sm:w-[65px] h-auto cursor-pointer"
    />
  );
}

export default Logo;
