import { configureStore } from '@reduxjs/toolkit';
import threadSlice from './todoThreads/todoThreads';
import todosSlice from './todos/todos';
import uiSlice from './ui/uiSlice';

const store = configureStore({
  reducer: { threads: threadSlice, todos: todosSlice, ui: uiSlice },
});

export default store;
