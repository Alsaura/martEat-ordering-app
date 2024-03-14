import logo from "../assets/logoweb.png";

const Footer = () => {
  return (
    <div className="bg-gray-900 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
          <img src={logo} className="w-24" alt="" />
        </span>
        <span className="text-white font-normal tracking-tight flex gap-4">
          <span>Privacy Policy</span>
          <span>Terms of Sevice</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
