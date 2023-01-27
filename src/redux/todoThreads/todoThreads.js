import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todoThreads: [
    {
      threadId: 'id1',
      name: 'Todo thread 1',
      progress: 0,
      quantity: 1,
      todos: [{ todoId: 'todoId1', title: 'Todo 1', isCompleted: false }],
    },
    {
      threadId: 'id2',
      name: 'Todo thread 2',
      progress: 50,
      quantity: 2,
      todos: [
        { todoId: 'todoId2', title: 'Todo 1', isCompleted: false },
        { todoId: 'todoId3', title: 'Todo 2', isCompleted: false },
      ],
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
