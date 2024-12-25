import { configureStore } from "@reduxjs/toolkit";
import studentsReducer from "./slices/studentsSlice";

export const store = configureStore({
  reducer: {
    students: studentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
