import { FiMenu } from "react-icons/fi";
import {
  SheetTrigger,
  SheetContent,
  Sheet,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";

const MobileSideBar = () => {
  return (
    <div className="hidden max-md:flex">
      <Sheet>
        <SheetTrigger>
          <div
            className="p-2 text-gray-700 hover:text-black hover:bg-gray-200 rounded-md"
            aria-label="Open Menu"
          >
            <FiMenu className="h-7 w-7" />
          </div>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>
              <img src="logo.svg" alt="Logo" className="h-11 ml-3" />
            </SheetTitle>
          </SheetHeader>
          <div className="py-6 flex flex-col items-start gap-6 h-screen w-64 bg-white shadow-md text-left text-[16px] ">
            <div className="flex flex-col items-start gap-1 w-full font-semibold">
              <a
                href="#"
                className="flex w-full pl-3 items-center py-3 px-8 text-gray-500 rounded-md hover:bg-[#EEEEEE]"
              >
                <img src="dashboard.svg" className="h-7 " />
                <span className="mx-4">Dashboard</span>
              </a>
              <a
                href="#"
                className="flex w-full pl-3 items-center py-3 px-8  bg-[#EEEEEE] rounded-md text-black"
              >
                <img src="student.svg" className="h-7 " />
                <span className="mx-4 font-bold">Students</span>
              </a>
              <a
                href="#"
                className="flex w-full pl-3 items-center py-3 px-8 text-gray-500 rounded-md hover:bg-[#EEEEEE]"
              >
                <img src="chapters.svg" className="h-7 " />
                <span className="mx-4">Chapter</span>
              </a>
              <a
                href="#"
                className="flex w-full pl-3 items-center py-3 px-8 text-gray-500 rounded-md hover:bg-[#EEEEEE]"
              >
                <img src="help.svg" className="h-7 " />
                <span className="mx-4">Help</span>
              </a>
              <a
                href="#"
                className="flex w-full pl-3 items-center py-3 px-8 text-gray-500 rounded-md hover:bg-[#EEEEEE]"
              >
                <img src="Report.svg" className="h-7 " />
                <span className="mx-4">Reports</span>
              </a>
              <a
                href="#"
                className="flex w-full pl-3 items-center py-3 px-8 text-gray-500 rounded-md hover:bg-[#EEEEEE]"
              >
                <img src="settings.svg" className="h-7 " />
                <span className="mx-4">Settings</span>
              </a>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSideBar;
