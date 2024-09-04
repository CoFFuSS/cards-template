import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Post } from '../../services/api/postsApi';

interface PostsState {
  posts: Post[] | null;
}

const initialState: PostsState = {
  posts: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      // eslint-disable-next-line no-param-reassign
      state.posts = action.payload;
    },
  },
});

export const { setPosts } = postsSlice.actions;

export default postsSlice.reducer;
