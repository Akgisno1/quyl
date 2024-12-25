"use client";

import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectValue,
} from "./ui/select";
import { FaChevronDown } from "react-icons/fa"; // Import the icon from react-icons

interface FilterProps {
  title: string;
  options: string[];
}

export default function FilterComponent({ title, options }: FilterProps) {
  return (
    <Select>
      <SelectTrigger className="relative bg-[#E9EDF1] text-[#3F526E] text-[16px] w-36 font-bold rounded-md flex justify-between items-center px-4 py-2">
        <SelectValue placeholder={`${title}`} />
        <FaChevronDown className="text-black w-4 h-4 absolute right-4" />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
