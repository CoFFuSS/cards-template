import { RootState } from '@/store/index';

export const currentUserName = (state: RootState) => state.user.user?.name;

export const requestedPosts = (state: RootState) => state.posts;
