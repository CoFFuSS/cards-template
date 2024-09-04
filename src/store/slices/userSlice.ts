import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '@/services/api/userApi';

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      // eslint-disable-next-line no-param-reassign
      state.user = action.payload;
    },
    clearUser: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
