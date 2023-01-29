/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todoThreads: [
    {
      id: 'id1',
      title: 'Todo thread 1',
    },
    {
      id: 'id2',
      title: 'Todo thread 2',
    },
    {
      id: 'id3',
      title: 'Todo thread 3',
    },
  ],
};

const threadSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addThread(state, action) {
      const newState = {
        ...state,
        todoThreads: [...state.todoThreads, { ...action.payload }],
      };
      return newState;
    },
    editThread(state, action) {
      const existingThreadIndex = state.todoThreads.findIndex(
        (thread) => thread.id === action.payload.id,
      );
      if (existingThreadIndex < 0) return state;
      state.todoThreads[existingThreadIndex].title = action.payload.title;
      return state;
    },
    removeThread(state, action) {
      const newState = { ...state };
      let newTodoThreads = [...state.todoThreads];
      newTodoThreads = newTodoThreads.filter(
        (thread) => thread.id !== action.payload,
      );
      newState.todoThreads = newTodoThreads;
      return newState;
    },
  },
});

export const threadSliceActions = threadSlice.actions;
export default threadSlice.reducer;
