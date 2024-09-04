import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { userApi } from '@/services/api/userApi';
import { postsApi } from '@/services/api/postsApi';
import { commentApi } from '@/services/api/commentsApi';

import userReducer from './slices/userSlice';
import postsReducer from './slices/postsSlice';
import commentsReducer from './slices/commentsSlice';

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    posts: postsReducer,
    [userApi.reducerPath]: userApi.reducer,
    user: userReducer,
    [commentApi.reducerPath]: commentApi.reducer,
    comments: commentsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware, userApi.middleware, commentApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
