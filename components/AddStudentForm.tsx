"use client";

import { useDispatch } from "react-redux";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { FaPlus } from "react-icons/fa";
import { addStudent } from "@/app/redux/slices/studentsSlice";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  cohort: z.string().min(1, "Please select a cohort"),
  course: z.string().min(1, "Please select a course"),
});

interface AddStudentFormProps {
  refreshStudents: () => void;
}

export default function AddStudentForm({
  refreshStudents,
}: AddStudentFormProps) {
  const [dialogOpen, setDialogOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      cohort: "",
      course: "",
    },
  });
  const dispatch = useDispatch();

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    const res = await fetch("/api/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      const newStudent = await res.json();

      dispatch(addStudent(newStudent));

      form.reset();
      setDialogOpen(false);
      refreshStudents();
    } else {
      console.error("Failed to add student");
    }
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#E9EDF1] text-[#3F526E] font-bold rounded-md flex items-center gap-2 px-4 py-2 ">
          <FaPlus className="w-4 h-4" />
          Add New Student
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Add New Student</DialogTitle>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-4 mt-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cohort"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cohort</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Cohort" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="AY 2022-23">AY 2022-23</SelectItem>
                      <SelectItem value="AY 2023-24">AY 2023-24</SelectItem>
                      <SelectItem value="AY 2024-25">AY 2024-25</SelectItem>
                      <SelectItem value="AY 2025-26">AY 2025-26</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="course"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Course" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="CBSE 9">CBSE 9</SelectItem>
                      <SelectItem value="CBSE 10">CBSE 10</SelectItem>
                      <SelectItem value="CBSE 11">CBSE 11</SelectItem>
                      <SelectItem value="CBSE 12">CBSE 12</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
