import { configureStore } from "@reduxjs/toolkit";
import { noteReducer } from './noteSlice/note-slice';

export const store = configureStore({
  reducer: {
    NOTESLICE: noteReducer,
  },
});
