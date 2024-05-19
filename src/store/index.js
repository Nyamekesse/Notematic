import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/auth-slice";
import { noteReducer } from './noteSlice/note-slice';

export const store = configureStore({
  reducer: {
    NOTESLICE: noteReducer,
    AUTHSLICE: authReducer
  },
});
