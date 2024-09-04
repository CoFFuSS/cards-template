import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PostComment } from '@/services/api/commentsApi';

interface CommentState {
  comments: PostComment[] | null;
}

const initialState: CommentState = {
  comments: null,
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setComments: (state, action: PayloadAction<PostComment[]>) => {
      // eslint-disable-next-line no-param-reassign
      state.comments = action.payload;
    },
    clearComments: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.comments = null;
    },
  },
});

export const { setComments, clearComments } = commentsSlice.actions;

export default commentsSlice.reducer;
