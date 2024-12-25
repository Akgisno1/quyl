"use client";

import { useState, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "./ui/table";
import { Dialog } from "./ui/dialog";
import EditStudentDialog from "./EditStudentDialog";
import { useDispatch } from "react-redux";
import { setstudents } from "@/app/redux/slices/studentsSlice";

interface Student {
  id: number;
  name: string;
  cohort: string;
  course: string;
  status: string;
  joined: string;
  login: string;
}

interface StudentTableProps {
  refreshTrigger: boolean;
  refreshStudents: () => void;
}

export default function StudentTable({
  refreshTrigger,
  refreshStudents,
}: StudentTableProps) {
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const dispatch = useDispatch();

  const fetchStudents = async () => {
    try {
      const res = await fetch("/api/students");
      if (!res.ok) {
        throw new Error("Failed to fetch students");
      }
      const data: Student[] = await res.json();

      dispatch(setstudents(data));
      setStudents(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, [refreshTrigger]);

  const formatDate = (dateString: string, withTime: boolean = false) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "short",
      year: "numeric",
      ...(withTime && { hour: "numeric", minute: "2-digit", hour12: true }),
    };
    return date.toLocaleString("en-US", options);
  };

  return (
    <div className="mt-8">
      <div className="overflow-auto ">
        <Table className="text-[12px] w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold text-black">
                Student Name
              </TableHead>
              <TableHead className="font-bold text-black">Cohort</TableHead>
              <TableHead className="font-bold text-black">Course</TableHead>
              <TableHead className="font-bold text-black">
                Date Joined
              </TableHead>
              <TableHead className="font-bold text-black">Last Login</TableHead>
              <TableHead className="font-bold text-black">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student) => (
              <TableRow
                key={student.id}
                className="cursor-pointer hover:bg-gray-100"
                onClick={() => setSelectedStudent(student)}
              >
                <TableCell>{student.name}</TableCell>
                <TableCell className="whitespace-nowrap">
                  {student.cohort}
                </TableCell>
                <TableCell className="flex flex-row gap-3 max-sm:flex-col">
                  <div className="flex flex-row items-center gap-[4px] bg-[#F6F8FA] rounded px-[2px] h-[24px]">
                    <img
                      src="boy.jpg"
                      alt="Course Icon"
                      className="h-[20px] w-[20px]"
                    />
                    <span className="mr-6 whitespace-nowrap">
                      {student.course} Science
                    </span>
                  </div>
                  <div className="flex flex-row items-center gap-[4px] bg-[#F6F8FA] rounded px-[2px] h-[24px]">
                    <img
                      src="girl.svg"
                      alt="Course Icon"
                      className="h-[20px] w-[20px]"
                    />
                    <span className="mr-6 whitespace-nowrap">
                      {student.course} Math
                    </span>
                  </div>
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  {formatDate(student.joined)}
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  {formatDate(student.login, true)}
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-block w-3 h-3 rounded-full ml-3 ${
                      student.status === "online"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  ></span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {selectedStudent && (
        <Dialog
          open={!!selectedStudent}
          onOpenChange={() => setSelectedStudent(null)}
        >
          <EditStudentDialog
            student={selectedStudent}
            onClose={() => setSelectedStudent(null)}
            refreshStudents={refreshStudents}
          />
        </Dialog>
      )}
    </div>
  );
}
