import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Student {
  id: number;
  name: string;
  cohort: string;
  course: string;
  status: string;
  joined: string;
  login: string;
}

interface StudentsState {
  students: Student[];
}

const initialState: StudentsState = {
  students: [],
};

const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    setstudents: (state, action: PayloadAction<Student[]>) => {
      state.students = action.payload;
    },
    addStudent: (state, action: PayloadAction<Student>) => {
      state.students.push(action.payload);
    },
    updateStudent: (state, action: PayloadAction<Student>) => {
      const index = state.students.findIndex(
        (student) => student.id === action.payload.id
      );
      if (index !== -1) {
        state.students[index] = action.payload;
      }
    },
    deleteStudent: (state, action: PayloadAction<number>) => {
      state.students = state.students.filter(
        (student) => student.id !== action.payload
      );
    },
  },
});

export const { setstudents, addStudent, updateStudent, deleteStudent } =
  studentsSlice.actions;

export default studentsSlice.reducer;
