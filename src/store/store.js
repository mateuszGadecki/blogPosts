import { configureStore } from '@reduxjs/toolkit';
import blogDataReducer from './blogDataSlice';

const store = configureStore({
  reducer: {
    blogData: blogDataReducer,
  },
});

export const selectPosts = (state) => state.blogData;

export default store;
