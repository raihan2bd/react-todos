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

    editTodo(state, action) {
      const newTodos = [...state.todos];
      const existingTodoIndex = newTodos.findIndex(
        (todo) => todo.id === action.payload.id,
      );
      if (existingTodoIndex < 0) return state;
      newTodos[existingTodoIndex] = {
        ...newTodos[existingTodoIndex],
        ...action.payload,
      };
      return { ...state, todos: [...newTodos] };
    },

    updateProgress(state, action) {
      const newTodos = [...state.todos];
      const existingTodoIndex = newTodos.findIndex(
        (todo) => todo.id === action.payload.id,
      );
      if (existingTodoIndex < 0) return state;
      newTodos[existingTodoIndex] = {
        ...newTodos[existingTodoIndex],
        isCompleted: action.payload.isCompleted,
      };
      return { ...state, todos: [...newTodos] };
    },

    // updateProgress(state, action) {
    //   const newTodos = [...state.todos];
    //   const existingTodoIndex = newTodos.findIndex(
    //     (todo) => todo.id === action.payload.id
    //   );
    //   if (existingTodoIndex < 0) return state;
    //   newTodos[existingTodoIndex].isCompleted = action.payload.isCompleted;
    //   return { ...state, todos: [...newTodos] };
    // },

    removeTodo(state, { payload }) {
      const updatedState = { ...state };
      updatedState.todos = updatedState.todos.filter(
        (todo) => todo.id !== payload,
      );
      return updatedState;
    },
    removeTodoByThread(state, action) {
      const updatedState = { ...state };
      updatedState.todos = updatedState.todos.filter(
        (todo) => todo.threadId !== action.payload,
      );

      return updatedState;
    },
  },
});

export const todoSliceActions = todosSlice.actions;
export default todosSlice.reducer;
