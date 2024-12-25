"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "./ui/dialog";
import { Input } from "./ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";
import { Button } from "./ui/button";
import { updateStudent, deleteStudent } from "@/app/redux/slices/studentsSlice";

import { useDispatch } from "react-redux";

interface Student {
  id: number;
  name: string;
  cohort: string;
  course: string;
  status: string;
  login: string;
}

interface EditStudentDialogProps {
  student: Student;
  onClose: () => void;
  refreshStudents: () => void;
}

const cohortOptions = ["AY 2022-23", "AY 2023-24", "AY 2024-25", "AY 2025-26"];
const courseOptions = ["CBSE 9", "CBSE 10", "CBSE 11", "CBSE 12"];

export default function EditStudentDialog({
  student,
  onClose,
  refreshStudents,
}: EditStudentDialogProps) {
  const [name, setName] = useState(student.name);
  const [cohort, setCohort] = useState(student.cohort);
  const [course, setCourse] = useState(student.course);
  const [status, setStatus] = useState(student.status);

  const dispatch = useDispatch();

  const handleUpdate = async () => {
    const res = await fetch("/api/students", {
      method: "PUT",
      body: JSON.stringify({
        id: student.id,
        name,
        cohort,
        course,
        status,
        ...(status === "online" && { login: new Date().toISOString() }),
      }),
    });

    if (res.ok) {
      const updatedStudent = await res.json();

      dispatch(updateStudent(updatedStudent));

      refreshStudents();
      onClose();
    } else {
      console.error("Failed to update student");
    }
  };

  const handleDelete = async () => {
    const res = await fetch("/api/students", {
      method: "DELETE",
      body: JSON.stringify({ id: student.id }),
    });

    if (res.ok) {
      dispatch(deleteStudent(student.id));

      refreshStudents();
      onClose();
    } else {
      console.error("Failed to delete student");
    }
  };

  return (
    <Dialog open onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Student</DialogTitle>
        </DialogHeader>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div className="flex flex-col gap-2">
            <label className="font-medium text-gray-700">Name</label>
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="font-medium text-gray-700">Cohort</label>
              <Select value={cohort} onValueChange={setCohort} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select Cohort" />
                </SelectTrigger>
                <SelectContent>
                  {cohortOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex-1">
              <label className="font-medium text-gray-700">Course</label>
              <Select value={course} onValueChange={setCourse} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select Course" />
                </SelectTrigger>
                <SelectContent>
                  {courseOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex-1">
              <label className="font-medium text-gray-700">Status</label>
              <Select value={status} onValueChange={setStatus} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="online">Online</SelectItem>
                  <SelectItem value="offline">Offline</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter className="flex justify-end gap-4">
            <Button
              variant="destructive"
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600"
            >
              Delete
            </Button>

            <Button
              variant="default"
              onClick={handleUpdate}
              className="bg-black text-white hover:bg-gray-800"
            >
              Update
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
