import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    {
      id: 'todoId1',
      threadId: 'id1',
      title: 'Todo 1',
      isCompleted: false,
    },
    {
      id: 'todoId2',
      threadId: 'id2',
      title: 'Todo 1',
      isCompleted: true,
    },
    {
      id: 'todoId3',
      threadId: 'id2',
      title: 'Todo 2',
      isCompleted: false,
    },
  ],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, { payload }) {
      const updatedState = { ...state };
      updatedState.todos = [...state.todos, payload];
      return updatedState;
    },
    removeTodo(state, { payload }) {
      const updatedState = { ...state };
      updatedState.todos = updatedState.todos.filter(
        (todo) => todo.id !== payload,
      );

      return updatedState;
    },
  },
});

export default todosSlice.reducer;
