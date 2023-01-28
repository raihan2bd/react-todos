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

const todosSlice = createSlice({
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
    removeThread(state, action) {
      const newState = [...state];
      let newTodoThreads = [...state.todoThreads];
      newTodoThreads = newTodoThreads.filter(
        (thread) => thread.id !== action.payload,
      );
      newState.todoThreads = newTodoThreads;
      return newState;
    },
  },
});

export const todosSliceActions = todosSlice.actions;
export default todosSlice.reducer;
