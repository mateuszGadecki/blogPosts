import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getPosts = createAsyncThunk('blogData/getPosts', async () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
      return fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((res) => ({
          users: res,
          posts: data,
        }));
    })
    .then((data) => {
      const postsList = data.posts.map((el) => {
        const index = data.users.findIndex(
          (element) => element.id === el.userId
        );
        return {
          body: el.body,
          id: el.id,
          title: el.title,
          user: data.users[index].username,
        };
      });
      return postsList;
    });
});

const inistialState = {
  postsList: null,
  status: null,
};

const blogDataSlice = createSlice({
  name: 'blogData',
  initialState: inistialState,
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.status = 'loading';
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.postsList = payload;
      state.status = 'success';
    },
    [getPosts.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default blogDataSlice.reducer;
