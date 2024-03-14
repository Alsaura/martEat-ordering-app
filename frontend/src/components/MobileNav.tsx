//ini untuk membuat sidebar di tampilan md
import { Sheet, SheetTrigger } from "./ui/sheet";
import { SheetContent, SheetDescription, SheetTitle } from "./ui/sheet"; //untuk isi content
import { Separator } from "@radix-ui/react-separator"; //untuk pemisah content
import { Button } from "./ui/button"; //library for button
import { AlignRight } from "lucide-react"; // library Icon

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignRight className="text-white" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          <span>Welcome To MartEat</span>
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex">
          <Button className="flex-1 font-bold bg-blue-500"> Log In</Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
