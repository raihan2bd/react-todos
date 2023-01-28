import { configureStore } from '@reduxjs/toolkit';
import todoThreads from './todoThreads/todoThreads';
import todosSlice from './todos/todos';

const store = configureStore({
  reducer: { threads: todoThreads, todos: todosSlice },
});

export default store;
