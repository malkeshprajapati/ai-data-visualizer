import { configureStore } from "@reduxjs/toolkit";
import AIData from './features/aiDataSlice.ts'

const store = configureStore({
  reducer: {
    aiData:AIData
  },
});

export default store
