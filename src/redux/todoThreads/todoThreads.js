/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { todoSliceActions } from '../todos/todos';

export const fetchTodos = createAsyncThunk(
  'todo-list/fetch',
  (data, thunkApi) => {
    const { todoThreads, todos } = data;
    if (todos) {
      thunkApi.dispatch(todoSliceActions.initialTodos(data.todos));
    }
    if (todoThreads) {
      return data.todoThreads;
    }
    return [];
  },
);

const initialState = {
  todoThreads: [],
  isInitialState: false,
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
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todoThreads = action.payload;
      state.isInitialState = true;
    });
  },
});

export const threadSliceActions = threadSlice.actions;
export default threadSlice.reducer;
