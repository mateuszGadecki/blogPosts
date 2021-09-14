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
    .then(({ users, posts }) => {
      return fetch('https://jsonplaceholder.typicode.com/comments')
        .then((res) => res.json())
        .then((res) => ({
          users: users,
          posts: posts,
          comments: res,
        }));
    })
    .then(({ posts, users, comments }) => {
      const postsList = posts.map((el) => {
        const index = users.findIndex((element) => element.id === el.userId);
        return {
          body: el.body,
          id: el.id,
          title: el.title,
          user: users[index].username,
          comments: [],
        };
      });

      comments.forEach((el) => {
        const index = posts.findIndex((element) => element.id === el.postId);
        postsList[index].comments.push(el);
      });
      return postsList;
    })
    .catch((error) => console.log(error));
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
