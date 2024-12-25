"use client";

import { useState } from "react";
import AddStudentForm from "./AddStudentForm";
import FilterComponent from "./FilterComponent";
import StudentTable from "./StudentTable";

export default function Hero() {
  const [refreshTrigger, setRefreshTrigger] = useState(false);

  const refreshStudents = () => {
    setRefreshTrigger((prev) => !prev); // Toggle the state to trigger a refresh
  };

  return (
    <main className="p-3 bg-white h-full w-full rounded-xl">
      <div className="flex flex-row items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-3 ">
        <div className="flex flex-row  gap-2">
          <FilterComponent
            title="Cohort"
            options={["AY 2022-23", "AY 2023-24", "AY 2024-25", "AY 2025-26"]}
          />
          <FilterComponent
            title="Course"
            options={["CBSE 9", "CBSE 10", "CBSE 11", "CBSE 12"]}
          />
        </div>

        <AddStudentForm refreshStudents={refreshStudents} />
      </div>

      <StudentTable
        refreshTrigger={refreshTrigger}
        refreshStudents={refreshStudents}
      />
    </main>
  );
}
