import { configureStore } from '@reduxjs/toolkit';
import todoThreads from './todoThreads/todoThreads';

const store = configureStore({
  reducer: { threads: todoThreads },
});

export default store;
