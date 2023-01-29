import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showAddThreadModal: false,
  showEditThreadModal: false,
  showAddTodoModal: false,
  showEditTodoModal: false,
};

const uiSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    openAddThreadModal(state) {
      const latestState = { ...state };
      latestState.showAddThreadModal = true;
      return latestState;
    },
    openEditThreadModal(state) {
      const latestState = { ...state };
      latestState.showEditThreadModal = true;
      return latestState;
    },
    openAddTodoModal(state) {
      const latestState = { ...state };
      latestState.showAddTodoModal = true;
      return latestState;
    },
    openEditTodoModal(state) {
      const latestState = { ...state };
      latestState.showEditTodoModal = true;
      return latestState;
    },
    closeModal() {
      return {
        showAddThreadModal: false,
        showEditThreadModal: false,
        showAddTodoModal: false,
        showEditTodoModal: false,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
