import logo from "../../assets/logo_nobg.png";

function Logo() {
  return (
    <img
      src={logo}
      alt="Logo"
      className="w-[50px] sm:w-[65px] h-auto"
    />
  );
}

export default Logo;
