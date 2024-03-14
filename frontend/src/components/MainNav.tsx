//Note : ini untuk membuat tombol Log in di tampilan LG
import { Button } from "./ui/button";

const MainNav = () => {
  return (
    <Button
      variant="ghost"
      className="text-base text-white font-normal hover:text-blue-800 hover:bg-white"
    >
      Log In
    </Button>
  );
};

export default MainNav;
