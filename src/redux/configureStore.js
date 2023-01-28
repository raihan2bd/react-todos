import { configureStore } from '@reduxjs/toolkit';
import todoThreads from './todoThreads/todoThreads';
import todosSlice from './todos/todos';
import uiSlice from './ui/uiSlice';

const store = configureStore({
  reducer: { threads: todoThreads, todos: todosSlice, ui: uiSlice },
});

export default store;
