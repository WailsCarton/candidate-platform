import { configureStore } from '@reduxjs/toolkit';
import candidateReducer from './candidateSlice';
import projectReducer from './projectSlice';

const store = configureStore({
  reducer: {
    candidate: candidateReducer,
    project: projectReducer,
  },
});

export default store;