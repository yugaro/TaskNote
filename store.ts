import { configureStore } from '@reduxjs/toolkit';
import userReducer from './src/slices/userSlice';
import todoReducer from './src/slices/todoSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    todo: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
