import { configureStore } from '@reduxjs/toolkit';
import blogDataReducer from './blogDataSlice';

const store = configureStore({
  reducer: {
    blogData: blogDataReducer,
  },
});

export default store;
